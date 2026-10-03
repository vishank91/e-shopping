export default function TextValidator(e) {
    let { name, value } = e.target
    switch (name) {
        case 'name':
            if (!value || value.length === 0)
                return name + " Field is Mendatory"
            else if (value.length < 3 || value.length > 100)
                return name + " Field Length Must Be 3-100 Characters"
            else
                return ""

        case 'question':
        case 'answer':
        case 'icon':
        case 'shortDescription':
            if (!value || value.length === 0)
                return name + " Field is Mendatory"
            else if (value.length < 10 || value.length > 1000)
                return name + " Field Length Must Be 10-1000 Characters"
            else
                return ""

        default:
            return ""
    }
}
