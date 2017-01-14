export default ({
    name
} = {}) => {
    let errors = {};

    if (!name) {
        errors.name = true;
    }

    return errors;
};
