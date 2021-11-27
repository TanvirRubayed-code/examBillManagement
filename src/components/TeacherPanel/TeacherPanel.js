import React from 'react';
import * as ReactBootStrap from "react-bootstrap"
import CULogo from "../../images/University_of_Chittagong_logo.png";
import ProfilePicChange from './ProfilePicChange/ProfilePicChange';
import ProfilePic from '../../images/profilepic.png';
import './TeacherPanel.css';
import { border } from '@mui/system';

const TeacherPanel = () => {

    return (

        <div>
            <div className="text-center mb-3 mt-3">
                <img style={{ height: "80px" }} src={CULogo} alt="" srcset="" />
                <br />
                <h3><b>পরীক্ষা সংক্রান্ত কাজের পারিতোষিক বিল ফরম</b></h3>
            </div>
            <div className="d-flex">
                <div style={{width:"25%"}} className="ms-3 mb-3 mt-3 me-3">
                    <div>
                        <img style={{ height: "100px" }} src={ProfilePic} alt="" srcset="" />
                    </div>
                    <div>
                        <h6 style={{ marginLeft: "5px", marginTop: "5px" }}>পরীক্ষকের নাম (বাংলায়):</h6>
                        <h6 style={{ marginLeft: "5px" }}>ইংরেজিতে (বড় অক্ষরে):</h6>
                        <h6 style={{ marginLeft: "5px" }}>পদবী:</h6>
                        <h6 style={{ marginLeft: "5px" }}>বিষয়:</h6>
                    </div>
                    <ProfilePicChange></ProfilePicChange>
                </div>
                <div style={{ width: "70%"}}>
                    <ReactBootStrap.Table bordered hover>
                        <thead>
                            <tr>
                                <th>ক্রমিক নং</th>
                                <th>কাজের নাম</th>
                                <th>পরীক্ষার নাম</th>
                                <th>বৎসর</th>
                                <th>কোর্স নং</th>
                                <th>খাতা/ছাত্রের সংখ্যা</th>
                                <th>কত ঘন্টার পরীক্ষা</th>
                                <th>মোট দিন/সদস্য সংখ্যা</th>
                                <th>অর্ধ/পূর্ণ দিন</th>
                                <th>টাকার পরিমাণ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><b>১.</b></td>
                                <td colSpan="9">প্রশ্নপত্র প্রণয়নঃ</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>তত্ত্বীয় কোর্স</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>ব্যবহারিক কোর্স</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>টিউটোরিয়াল</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><b>২.</b></td>
                                <td>প্রশ্নপত্র অনুবাদ:</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><b>৩.</b></td>
                                <td colSpan="9">উত্তরপত্র পরীক্ষণ:</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>তত্ত্বীয় কোর্স</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>ব্যবহারিক কোর্স</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>টিউটোরিয়াল</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>৩য় পরীক্ষণ</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><b>৪.</b></td>
                                <td>প্রশ্নপত্র সমীক্ষণ (মডারেশন)</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><b>৫.</b></td>
                                <td>মৌখিক পরীক্ষা</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><b>৬.</b></td>
                                <td>ব্যবহারিক পরীক্ষার সম্মানী</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><b>৭.</b></td>
                                <td>টেবুলেশন</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><b>৮.</b></td>
                                <td colSpan="9">পরীক্ষক:</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>ফিল্ড ওয়ার্ক/ইন্ডাস্ট্রিয়াল ট্যুর</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>ব্যবহারিক নোট বুক</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>সংগৃহীত নমুনা পরীক্ষণ</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>প্রজেক্ট/টার্ম পেপার/ইন্টার্ণশীপ রিপোর্ট</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>থিসিস</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><b>৯.</b></td>
                                <td>প্রশ্নপত্র লিখন</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><b>১০.</b></td>
                                <td>প্রশ্নপত্র ফটোকপি</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><b>১১.</b></td>
                                <td>গ্রেডসিট লিখন</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><b>১২.</b></td>
                                <td>গ্রেডসিট যাচাইকরণ</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><b>১৩.</b></td>
                                <td>থিসিস গাইড</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><b>১৪.</b></td>
                                <td>সভাপতির সম্মানী ভাতা</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><b>১৫.</b></td>
                                <td>ইনসিডেন্টাল চার্জ</td>
                                <td colSpan="7">সংযুক্ত ভাউচার নং</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>টাকা=</td>
                                <td colSpan="7"></td>
                                <td>মোট=</td>
                            </tr>
                        </tbody>
                    </ReactBootStrap.Table>
                </div>
            </div>
        </div>
    );
};

export default TeacherPanel;