export default {
    fields: [
        // Company
        {
            type: 'input',
            inputType: 'text',
            placeholder: 'Company Name',
            label: 'Company',
            model: 'company',
            styleClasses: ['col-md-4', 'p-0', 'pr-md-1'],
        },
        // Position
        {
            type: 'input',
            inputType: 'text',
            placeholder: 'President',
            label: 'Position',
            model: 'position',
            styleClasses: ['col-md-4', 'p-0', 'pr-md-1'],
        },
        // Website
        {
            type: 'input',
            inputType: 'text',
            placeholder: 'http://company.com',
            label: 'Website',
            model: 'website',
            styleClasses: ['col-md-4', 'p-0', 'pr-md-1'],
        },
        // StartDate
        {
            type: 'input',
            inputType: 'date',
            format: 'YYYY-MM-DD',
            placeholder: '1995-01-05',
            label: 'Start Date',
            model: 'startDate',
            styleClasses: ['col-md-6', 'p-0'],
        },
        // EndDate
        {
            type: 'input',
            inputType: 'date',
            format: 'YYYY-MM-DD',
            placeholder: '2000-01-05',
            label: 'End Date',
            model: 'endDate',
            styleClasses: ['col-md-6', 'p-0'],
        },
        // Summary
        {
            type: 'textArea',
            inputType: 'text',
            label: 'Summary',
            model: 'summary',
        },
    ]
}