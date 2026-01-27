function validateForm() {
    const shape = document.getElementById('shape').value;
    const dimensions = document.getElementById('dimensions');
    let valid = true;

    if (shape === 'rectangle') {
        const width = document.createElement('input');
        width.type = 'number';
        width.name = 'width';
        width.placeholder = 'Width (positive number)';
        width.required = true;
        width.min = 0;
        dimensions.appendChild(width);

        const height = document.createElement('input');
        height.type = 'number';
        height.name = 'height';
        height.placeholder = 'Height (positive number)';
        height.required = true;
        height.min = 0;
        dimensions.appendChild(height);
    } else if (shape === 'circle') {
        const radius = document.createElement('input');
        radius.type = 'number';
        radius.name = 'radius';
        radius.placeholder = 'Radius (positive number)';
        radius.required = true;
        radius.min = 0;
        dimensions.appendChild(radius);
    } else if (shape === 'triangle') {
        const base = document.createElement('input');
        base.type = 'number';
        base.name = 'base';
        base.placeholder = 'Base (positive number)';
        base.required = true;
        base.min = 0;
        dimensions.appendChild(base);

        const height = document.createElement('input');
        height.type = 'number';
        height.name = 'height';
        height.placeholder = 'Height (positive number)';
        height.required = true;
        height.min = 0;
        dimensions.appendChild(height);
    }

    return valid;
}
