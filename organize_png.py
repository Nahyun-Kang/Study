import os
import shutil

# Task 1: Create 'icons' folder on the desktop
desktop_path = os.path.join(os.path.expanduser("~"), "Desktop")
icons_folder_path = os.path.join(desktop_path, "icons")

if not os.path.exists(icons_folder_path):
    os.mkdir(icons_folder_path)
    print("Folder 'icons' created on the desktop.")
else:
    print("Folder 'icons' already exists on the desktop.")

# Task 2: Move png files from 'Downloads' to 'icons'
downloads_path = os.path.join(os.path.expanduser("~"), "Downloads")
png_files = [file for file in os.listdir(downloads_path) if file.lower().endswith(".png")]

for file in png_files:
    source_path = os.path.join(downloads_path, file)
    destination_path = os.path.join(icons_folder_path, file)
    shutil.move(source_path, destination_path)
    print(f"Moved '{file}' to 'icons' folder.")

# Task 3: Rename png files with "icon_" prefix
for file in os.listdir(icons_folder_path):
    if file.lower().endswith(".png"):
        new_filename = "icon_" + file
        old_path = os.path.join(icons_folder_path, file)
        new_path = os.path.join(icons_folder_path, new_filename)
        os.rename(old_path, new_path)
        print(f"Renamed '{file}' to '{new_filename}'.")
