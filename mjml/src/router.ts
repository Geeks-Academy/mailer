import { Request, Response, Router } from 'express'
import mjml from 'mjml'
import { readFileSync, readdirSync } from 'fs'
import {regexpForVariable, preprocessMatches} from './utils'
const ip = require('ip');

const router = Router()

// check microservice is live
router.get('/', (req: Request, res: Response) => {
    res.json({ name: 'mjml-converter', ip: ip.address() })
})

// find template by templateName, and fill with templateVariables
router.post('/convert', (req: Request, res: Response) => {
    try {
        const { templateName='template', templateVariables = { title: 'test' } } = req.body

        const templateMjml = readFileSync(`${__dirname}/templates/${templateName}.mjml`).toLocaleString()
        let templateHtml = mjml(templateMjml).html

        const matches = templateHtml.match(regexpForVariable)

        if (!matches) {
            return res.json({ templateMjml, templateHtml })
        }

        const passedVariables = Object.keys(templateVariables)

        if (passedVariables.length !== 0) {
            passedVariables.forEach(key => {
                const varName = `(\$${key})`
                templateHtml = templateHtml.replace(varName, templateVariables[key])
            })
            return res.json({ templateMjml, templateHtml })
        }
    }

    catch (error) {
        return res.json({ error: error.message })
    }
})

// get all template names
router.get('/templates', (req: Request, res: Response) => {
    try {
        const templates = readdirSync(`${__dirname}/templates`).map(el => el.replace('.mjml', ''))
        return res.json({ templates })
    }

    catch (error) {
        // console.error(error.message)
        return res.json({ error: error.message })
    }

})

// get mjml, html and vars of template by templateName
router.post('/templates', (req: Request, res: Response) => {
    try {
        const { templateName = 'test' } = req.body
        const templateMjml = readFileSync(`${__dirname}/templates/${templateName}.mjml`).toLocaleString()
        const templateHtml = mjml(templateMjml).html

        const foundVariables = templateMjml.match(regexpForVariable)
        if (!foundVariables) {
            return res.json({ templateMjml, templateHtml })
        }

        const templateVariables = preprocessMatches(foundVariables)
        return res.json({ templateMjml, templateVariables, templateHtml })
    }

    catch (error) {
        // console.error(error.message)
        return res.json({ error: error.message })
    }

})

export default router