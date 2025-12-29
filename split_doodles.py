
from PIL import Image
import os

def crop_and_save(image, bounds, name, output_dir):
    cropped = image.crop(bounds)
    cropped.save(os.path.join(output_dir, name))

try:
    source_path = r"C:\Users\shiva\.gemini\antigravity\brain\86471b41-94de-4d70-a834-b347133ac90b\crayon_doodles_sheet_1767025864017.png"
    output_dir = r"c:\Users\shiva\Documents\webProjects\portfolioShivang\public\doodles"
    
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    img = Image.open(source_path)
    width, height = img.size
    
    # Approximate grid based on the generated image (2 rows, 3 cols)
    # Row 1: Butterfly, Leaf, Star (roughly)
    # Row 2: Cloud, Bird
    
    # Adjust coordinates based on typical grid generation logic or simple quadrants
    # Let's try 5 segments
    
    # Butterfly (Top Left)
    crop_and_save(img, (50, 50, 350, 350), "butterfly.png", output_dir)
    
    # Leaf (Top Right)
    crop_and_save(img, (650, 50, 950, 350), "leaf.png", output_dir)
    
    # Star (Center) - offset
    crop_and_save(img, (350, 350, 650, 650), "star.png", output_dir)
    
    # Cloud (Bottom Left)
    crop_and_save(img, (50, 650, 350, 950), "cloud.png", output_dir)
    
    # Bird (Bottom Right)
    crop_and_save(img, (650, 650, 950, 950), "bird.png", output_dir)

    print("Success")
except Exception as e:
    print(f"Error: {e}")
