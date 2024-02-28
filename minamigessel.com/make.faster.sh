#!/bin/bash

# Set the input and output folders
input_folder="images/"
output_folder="images_webp"

# Ensure the output folder exists
mkdir -p "$output_folder"

# Iterate over JPG files in the input folder
for jpg_file in "$input_folder"/*.jpg; do
    # Get the file name without extension
    file_name=$(basename -- "$jpg_file")
    file_name_no_ext="${file_name%.jpg}"

    # Convert JPG to WebP
    cwebp "$jpg_file" -o "$output_folder/$file_name_no_ext.webp"
donex   