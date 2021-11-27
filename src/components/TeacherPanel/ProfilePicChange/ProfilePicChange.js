import React, { useState } from 'react';
import "./ProfilePicChange.css";

const ProfilePicChange = () => {
    const [imgPreview, setImgPreview] = useState(null);
    const [error, setError] = useState(false);

    const handleImageChange = (e) => {
        setError(false);
        const selected = e.target.files[0];
        const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
        if (selected && ALLOWED_TYPES.includes(selected.type)) {
            let reader = new FileReader();
            reader.onloadend = () => {
                setImgPreview(reader.result);
            };
            reader.readAsDataURL(selected);
        } else {
            setError(true);
        }
    };

    return (
        <div className="Pp">
            <div className="container">
                {error && <p className="errorMsg">File not supported</p>}
                <div
                    className="imgPreview"
                    style={{
                        background: imgPreview
                            ? `url("${imgPreview}") no-repeat center/cover`
                            : ""
                    }}
                >
                    {!imgPreview && (
                        <>
                            <button type="button" class="btn btn-secondary"><label htmlFor="fileUpload" className="customFileUpload">Choose File</label></button>
                            <input type="file" id="fileUpload" onChange={handleImageChange} />
                            <span>(jpg, jpeg or png)</span>
                        </>
                    )}
                </div>
                {imgPreview && (
                    <button onClick={() => setImgPreview(null)} className="btn btn-secondary button">Remove</button>
                )}
            </div>
        </div>
    );
};

export default ProfilePicChange;