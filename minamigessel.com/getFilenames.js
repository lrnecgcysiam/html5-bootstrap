const fs = require('fs');
const path = require('path');

// Replace 'path/to/your/images/folder' with the actual path to your images folder
const imagesPath = 'images';

function getImageFileNames() {
    try {
        const files = fs.readdirSync(imagesPath);
        const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
        return imageFiles;
    } catch (error) {
        console.error('Error reading images folder:', error);
        return [];
    }
}

function createJsonFile(fileNames) {
    try {
        const jsonData = JSON.stringify({ images: fileNames }, null, 2);
        fs.writeFileSync('imageFileNames.json', jsonData);
        console.log('JSON file created successfully.');
    } catch (error) {
        console.error('Error creating JSON file:', error);
    }
}

// Call the function to get the list of image file names
const imageFileNames = getImageFileNames(imagesPath);

// Call the function to create a JSON file with the image file names
createJsonFile(imageFileNames);