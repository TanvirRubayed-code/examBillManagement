import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import CULogo from "../../images/University_of_Chittagong_logo.png";
import "./TeacherPanel.css";

class TeacherPanel extends React.Component  {
  render(){
    return (
        <div className="hidden">
          <div className="text-center mb-3 mt-3">
            <img style={{ height: "80px", marginBottom:'0.5em' }} src={CULogo} alt="" />
            <br />
            <h4 className="formhead">
              <b>পরীক্ষা সংক্রান্ত কাজের পারিতোষিক বিল ফরম</b>
            </h4>
            <small className="formhead">
              ( বিল সংশ্লিষ্ট পরীক্ষা কমিটির চেয়ারম্যানের মাধ্যমে পরীক্ষা অনুষ্ঠিত
              হওয়ার এক বছরের মধ্যে পরীক্ষা নিয়ন্ত্রক দপ্তরে দাখিল করতে হবে। প্রতি
              পত্রের পরীক্ষার জন্য পৃথক পৃথকভাবে বিল দাখিল করতে হবে। )
            </small>{" "}
            <br />
          </div>
          <div className="formhead" style={{marginLeft:"1em", fontSize:"1em", marginBottom:"1em"}}>
            <b>পরীক্ষকের নাম (বাংলায়) :</b> <br />
            <b>ইংরেজীতে (বড় অক্ষরে) :</b> <br />
            <b>বিষয় :</b><br />
          </div>
    
          <div style={{ width: "100%" }}>
            <table style={{fontSize:"12px"}} className="table">
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
              <tr>
                  <td>
                    <b>১.</b>
                  </td>
                  <td colSpan="9">
                    <b>প্রশ্নপত্র প্রণয়নঃ</b>
                  </td>
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
                  <td>
                    <b>২.</b>
                  </td>
                  <td>
                    <b>প্রশ্নপত্র অনুবাদঃ</b>
                  </td>
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
                  <td>
                    <b>৩.</b>
                  </td>
                  <td colSpan="9">
                    <b>উত্তরপত্র পরীক্ষণঃ</b>
                  </td>
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
                  <td>
                    <b>৪.</b>
                  </td>
                  <td>
                    <b>প্রশ্নপত্র সমীক্ষণ (মডারেশন)</b>
                  </td>
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
                  <td>
                    <b>৫.</b>
                  </td>
                  <td>
                    <b>মৌখিক পরীক্ষা</b>
                  </td>
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
                  <td>
                    <b>৬.</b>
                  </td>
                  <td>
                    <b>ব্যবহারিক পরীক্ষার সম্মানী</b>
                  </td>
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
                  <td>
                    <b>৭.</b>
                  </td>
                  <td>
                    <b>টেবুলেশন</b>
                  </td>
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
                  <td>
                    <b>৮.</b>
                  </td>
                  <td colSpan="9">
                    <b>পরীক্ষকঃ</b>
                  </td>
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
                  <td>
                    <b>৯.</b>
                  </td>
                  <td>
                    <b>প্রশ্নপত্র লিখন</b>
                  </td>
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
                  <td>
                    <b>১০.</b>
                  </td>
                  <td>
                    <b>প্রশ্নপত্র ফটোকপি</b>
                  </td>
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
                  <td>
                    <b>১১.</b>
                  </td>
                  <td>
                    <b>গ্রেডসিট লিখন</b>
                  </td>
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
                  <td>
                    <b>১২.</b>
                  </td>
                  <td>
                    <b>গ্রেডসিট যাচাইকরণ</b>
                  </td>
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
                  <td>
                    <b>১৩.</b>
                  </td>
                  <td>
                    <b>থিসিস গাইড</b>
                  </td>
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
                  <td>
                    <b>১৪.</b>
                  </td>
                  <td>
                    <b>সভাপতির সম্মানী ভাতা</b>
                  </td>
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
                  <td>
                    <b>১৫.</b>
                  </td>
                  <td>
                    <b>ইনসিডেন্টাল চার্জ</b>
                  </td>
                  <td colSpan="7">সংযুক্ত ভাউচার নং</td>
                </tr>
                <tr>
                  <td></td>
                  <td>টাকা=</td>
                  <td colSpan="7"></td>
                  <td>মোট=</td>
                </tr>
            </table>

          </div>
        </div>
      );
  }
};

export default TeacherPanel;
