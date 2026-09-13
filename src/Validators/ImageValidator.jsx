export default function ImageValidator(e) {
    if (e.target.files.length === 1) {
        let pic = e.target.files[0]
        if (!["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"].includes(pic.type))
            return "Invalid Pic Type, Allowd Formats are .jpeg, .jpg, .png, .gif"
        else if (pic.size > 1048576)
            return "Pic is Too heavy, please upload an image upto 1mb"
        else
            return ""
    }
    else {

    }
}
