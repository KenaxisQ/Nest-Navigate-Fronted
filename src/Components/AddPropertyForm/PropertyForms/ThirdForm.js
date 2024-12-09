import PropTypes from "prop-types"
import { useState, useRef } from "react";
import './ThirdForm.css'
import { PropertyUploadForm } from "../PropertyForms/PropertyUploadForm";
import { FiUpload } from "react-icons/fi";
import { BiSolidImageAdd } from "react-icons/bi";
import {v4 as uuidv4} from 'uuid';
import HttpService from "../../../Services/http";
export const ThirdForm = ({ setStep, setValue, register, onSubmit }) => {
    const defaultPlaceholderImages = []//aceholder image URL
    const [selectedFiles, setSelectedFiles] = useState(defaultPlaceholderImages);
    const propertyIdentifier = uuidv4();
    const [preview, setPreview] = useState("https://via.placeholder.com/150");
    var thumbnailFile = useRef();
    const inputRef = useRef(null);

    const processData = async (files) => {
        
    
        const formData = new FormData();
    
        // Process files and rename the thumbnail file
        const processedFiles = files.map((file) => {
            if (file?.name === thumbnailFile?.current?.name) {
                // Extract the file extension
                const fileExtension = file.name.substring(file.name.lastIndexOf('.'));
                const baseName = file.name.substring(0, file.name.lastIndexOf('.')); // Extract the filename without extension
                // Rename the file to "_thumbnail.<extension>"
                return new File([file], `${baseName}_thumbnail${fileExtension}`, { type: file.type });
            }
            return file;
        });
    
        // Append files to FormData
        processedFiles.forEach((file) => {
            formData.append("media", file);
        });
    
        formData.append('isProperty', "true");
        formData.append('identifier', propertyIdentifier);
    
        // Debugging output
        console.log('Processed Files:', processedFiles);
        console.log('formData Response', formData);
    
        // Optional: Send FormData to the server
        var https = new HttpService();
        var response = await https.post('file/upload', formData, true);
        console.log('Media Response', response);
        const transformedData = {
            images: response?.data.map((item) => item.name.split('/').pop()), // Extract only the image name
            uploadedDate: new Date().toISOString(), // Get the current date and time
        };    
        console.log('transformedData', transformedData);            
        setValue('media', JSON.stringify(transformedData));
    };
    
    
    const handleChange = (event) => {
        
        console.log(event.target.files);
        // const remainingSlots = 8 - event.target.files.length; // Calculate remaining slots to fill
        const files = Array.from(event.target.files).slice(0, 8);
        const filePreviews = files.map(file => URL.createObjectURL(file));
        setSelectedFiles([...Array.from(files)]); //cahnge here for fixed 8 when uploadeed
        setPreview(filePreviews[0]);
        thumbnailFile.current = files[0]; // Set the thumbnail file
        // thumbnailFile = files[0]; // Select the first file as the thumbnail
    }
    console.log('preview', thumbnailFile);

    const handleUploadClick = () => {
        setValue('id', propertyIdentifier);
        onSubmit();
        //setStep(3);
    };

    const uploadImages = async () => {
        await processData(selectedFiles);
    }
    const handleImageClick = (file, event) => {
        setPreview(URL.createObjectURL(file));
        thumbnailFile.current = file; // Set the thumbnail file
    };
    return (
        <form className="container">
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-5 pb-4 pl-4">
                    <div className="">
                        <p htmlFor="askingPrice" className="text-start fw-bold">Enter Asking Price</p>
                        <input className="form-control-lg" placeholder="Asking Price" type="number" 
                            style={{ color: "black", border: "1px solid #0000004f",borderRadius: "6px", width: "100%" }} 
                            onChange={(event) =>
                                setValue('price', event.target.value)
                              }
                            {...register('price')}/>
                        <p className="form-text text-start">
                            This Price is what is potentially told to Clients
                        </p>
                    </div>
                    <div className="">
                        <p className="text-start fw-bold">Upload thumbnail Image</p>
                        <img alt="img-thumbnail" src={preview} style={{ cursor: 'pointer',width: '100%', height: '300px', objectFit: 'cover' }}/>
                    </div>
                </div>
                <div className="col-lg-6 pb-4 pl-4">
                    <p className="text-center fw-bold ">Upload Additional Images</p>
                    <div className="image-grid">
                    {selectedFiles.map((file, index) => (
                            <img
                            src={file instanceof File ? URL.createObjectURL(file) : file}
                            alt={`preview-${index}`}
                            className=""
                            onClick={(event) => handleImageClick(file, event)}
                            style={{
                                cursor: 'pointer',
                                width: '100px', // Make the image fill the parent div width
                                height: '100px', // Make the image fill the parent div height
                                objectFit: 'cover' // Ensure the image covers the div area
                            }}
                            />
                        ))}
                        <div class="upload-placeholder">
                            <BiSolidImageAdd size={'30px'}/>
                            <input
                            type="file"
                            multiple
                            accept=".jpeg, .jpg, .png"
                            onChange={event => {handleChange(event)}}
                            id="file-upload"/>
                        </div>

                        </div>
                        <button className="btnUpload PropertyNextButton" type="button" onClick={() => uploadImages()}>Upload Images After Selecting Thumbnail</button>

                        <button className="btnUpload PropertyNextButton" type="button" onClick={() => handleUploadClick()}>Upload Property</button>
                </div>
            </div>

        </form>
    )
}
ThirdForm.propTypes = {
    setStep: PropTypes.func.isRequired
}