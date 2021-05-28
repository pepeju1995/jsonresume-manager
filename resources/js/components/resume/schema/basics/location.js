export default{
    fields: [
        // Adress
        {
            type: 'input',
            inputType: 'text',
            placeholder: 'CalleMayor 117',
            label: 'Address',
            model: 'address',
            styleClasses: ['col-md-4', 'p-0', 'pr-md-1'],
        },
        // Postal Code
        {
            type: 'input',
            inputType: 'text',
            placeholder: '13328',
            label: 'Postal Code',
            model: 'postalCode',
            styleClasses: ['col-md-4', 'p-0', 'pr-md-1'],
        },
        // City
        {
            type: 'input',
            inputType: 'text',
            placeholder: 'Almedina',
            label: 'City',
            model: 'city',
            styleClasses: ['col-md-4', 'p-0', 'pr-md-1'],
        },
        // Country Code
        {
            type: 'input',
            inputType: 'text',
            placeholder: 'ES',
            label: 'Country Code',
            model: 'countryCode',
            styleClasses: ['col-md-6', 'p-0', 'pr-md-1'],
        },
        // Region
        {
            type: 'input',
            inputType: 'text',
            placeholder: 'Ciudad Real',
            label: 'Region',
            model: 'region',
            styleClasses: ['col-md-4', 'p-0', 'pr-md-1'],
        },

    ]
}