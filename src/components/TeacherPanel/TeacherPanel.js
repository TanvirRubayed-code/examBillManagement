import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import CULogo from "../../images/University_of_Chittagong_logo.png";
import "./TeacherPanel.css";

class TeacherPanel extends React.Component {
  render() {
    console.log(this.props.data);
    const {
      nameB,
      nameE,
      title,
      dept,
      university,
      mobile,
      examYear,
      examName,
      startDate,
      endDate,
    } = this.props.data;

    return (
      <div className="hidden">
        <div className="text-center">
          <img
            style={{ height: "55px", marginBottom: "0.5em" }}
            src={CULogo}
            alt=""
          />
          <div className="resister">
            <small>রেজিস্টারের পৃষ্ঠা নং......................</small>
            <br />
            <small>পরীক্ষকের ক্রমিক নং......................</small>
          </div>
          <br />
          <h4 className="blocksys">
            <b style={{ color: "black" }}>
              পরীক্ষা সংক্রান্ত কাজের পারিতোষিক বিল ফরম
            </b>
          </h4>
          <small className="blocksys">
            ( বিল সংশ্লিষ্ট পরীক্ষা কমিটির চেয়ারম্যানের মাধ্যমে পরীক্ষা অনুষ্ঠিত
            হওয়ার এক বছরের মধ্যে পরীক্ষা নিয়ন্ত্রক দপ্তরে দাখিল করতে হবে। প্রতি
            পরীক্ষার জন্য পৃথক পৃথকভাবে বিল দাখিল করতে হবে। )
          </small>
        </div>
        <table className="tablehead">
          <tr>
            <td className="wd65">
              <b>পরীক্ষকের নাম (বাংলায়) : </b>
              {nameB}
            </td>
            <td>
              <b>বিষয় : </b> {dept}
            </td>
          </tr>
          <tr>
            <td>
              <b>ইংরেজীতে (বড় অক্ষরে) : </b> {nameE}
            </td>
            <td>
              <b>পরীক্ষার নাম : </b> {examName}
            </td>
          </tr>
          <tr>
            <td>
              <b>পদবী, পূর্ণ ঠিকানা :</b> {title} , {dept}, {university}
            </td>
            <td>
              <b>পরীক্ষার বৎসর : </b> {examYear}
            </td>
          </tr>
          <tr>
            <td>
              <b>মোবাইল নম্বর : </b> {mobile}
            </td>
            <td>
              <b>পরীক্ষা অনুষ্ঠানের তারিখ : </b> {startDate} - {endDate}
            </td>
          </tr>
        </table>

        <div style={{ padding: "0 5px 0 5px", marginTop: "2px" }}>
          <table
            style={{ width: "100%", fontSize: "10px", lineHeight: "1.3" }}
            className="table"
          >
            <tr>
              <th style={{ width: "1em", textAlign: "center" }}>ক্রমিক নং</th>
              <th style={{ width: "18em", textAlign: "center" }}>কাজের নাম</th>
              <th style={{ width: "24em", textAlign: "center" }}>কোর্স নং</th>
              <th style={{ width: "6em", textAlign: "center" }}>
                খাতা/ছাত্রের<br></br>সংখ্যা
              </th>
              <th style={{ width: "6em", textAlign: "center" }}>
                কত ঘন্টার
                <br />
                পরীক্ষা
              </th>
              <th style={{ width: "6em", textAlign: "center" }}>
                মোট দিন/
                <br />
                সদস্য সংখ্যা
              </th>
              <th style={{ width: "6em", textAlign: "center" }}>
                অর্ধ/পূর্ণ
                <br />
                পত্র
              </th>
              <th style={{ textAlign: "center" }}>টাকার পরিমাণ</th>
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
              <td>{
                this.props.data[0]?.map(theo =><span>{theo},</span>)
                }</td>
              <td></td>
              <td>{
                this.props.data[1]?.map(hour => <span>{hour},</span>)
  }</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>ব্যবহারিক কোর্স</td>
              <td>{
                this.props.data[4]?.map(lab => <span>{lab},</span>)
                }</td>
              <td></td>
              <td>{
                
                }</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>টিউটোরিয়াল</td>
              <td>{
                this.props.data[2]?.map(tutorial => <span>{tutorial},</span>)
  }
              </td>
              <td></td>
              <td></td>
              <td>{
                this.props.data[3]?.map(tutoNumber => <span>{tutoNumber},</span>)
                }</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>টারমিনাল</td>
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
                <b>প্রশ্নপত্র সমীক্ষণ (মডারেশন)</b>
              </td>
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
              <td>
                <b>প্রশ্নপত্র অনুবাদঃ</b>
              </td>
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
                <b>প্রশ্নপত্র লিখন</b>
              </td>
              <td>{
                this.props.data[5]?.map(Qwriter => <span>{Qwriter},</span>)
                }</td>
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
                <b>প্রশ্নপত্র ফটোকপি</b>
              </td>
              <td>{
                this.props.data[6]?.map(Qphotocopy => <span>{Qphotocopy},</span>)
                }</td>
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
              <td colSpan="9">
                <b>উত্তরপত্র পরীক্ষণঃ</b>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>তত্ত্বীয় কোর্স</td>
              <td>{
                this.props.data[7]?.map(TheoExaminer => <span>{TheoExaminer},</span>)
                }</td>
              <td>{
                this.props.data[8]?.map(numberOfPaper => <span>{numberOfPaper},</span>)
                }</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>ব্যবহারিক কোর্স</td>
              <td>{
                this.props.data[11]?.map(labExaminer => <span>{labExaminer},</span>)
                }</td>
              <td>{
                this.props.data[12]?.map(labExaminee => <span>{labExaminee},</span>)
                }</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>টিউটোরিয়াল</td>
              <td>{
                this.props.data[9]?.map(tutorialExaminer => <span>{tutorialExaminer},</span>)
                }</td>
              <td>{
                this.props.data[10]?.map(tutorialExaminee => <span>{tutorialExaminee},</span>)
                }</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>টার্মিনাল</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>প্রেজেন্টেশন</td>
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
            </tr>

            <tr>
              <td>
                <b>৭.</b>
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
            </tr>
            <tr>
              <td></td>
              <td>ব্যবহারিক নোট বুক</td>
              <td>{
                this.props.data[13]?.map(notebookExaminer => <span>{notebookExaminer},</span>)
                }</td>
              <td>{
                this.props.data[14]?.map(totalNoteBook => <span>{totalNoteBook},</span>)
                }</td>
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
            </tr>
            <tr>
              <td></td>
              <td>প্রজেক্ট/টার্ম পেপার/ইন্টার্ণশীপ রিপোর্ট</td>
              <td>{
                this.props.data[15]?.map(projectExaminer => <span>{projectExaminer},</span>)
                }</td>
              <td>{
                this.props.data[16]?.map(projectExaminee => <span>{projectExaminee},</span>)
                }</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>থিসিস (মাস্টার্স/এফ.ফিল/পিএইচ.ডি)</td>
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
                <b>ব্যবহারিক পরীক্ষার সম্মানী</b>
              </td>
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
                <b>টেবুলেশন</b>
              </td>
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
            </tr>
            <tr>
              <td>
                <b>১৩.</b>
              </td>
              <td>
                <b>থিসিস গাইড/সুপারভিশন</b>
              </td>
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
            </tr>
            <tr>
              <td>
                <b>১৫.</b>
              </td>
              <td>
                <b>পরীক্ষা কমিটির সদস্য সম্মানী</b>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <b>১৬.</b>
              </td>
              <td>
                <b>পরিদর্শক সম্মানী(প্রতি টিউটোরিয়াল)</b>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <b>১৭.</b>
              </td>
              <td colSpan="6">
                <b>ইনসিডেন্টাল চার্জ(সংযুক্ত ভাউচার নং-)</b>
              </td>
              <td></td>
            </tr>
            <tr>
              <td colSpan="6">মোট টাকা কথায়=</td>
              <td style={{ float: "right", border: "none" }}>মোট টাকা=</td>
              <td></td>
            </tr>
          </table>
          <table className="nobordertable">
            <tr>
              <td>
                ...................................................................
              </td>
              <td>.............................</td>
            </tr>
            <tr>
              <td>প্রতি স্বাক্ষর, সভাপতি, পরীক্ষা কমিটি</td>
              <td>পরীক্ষকের স্বাক্ষর</td>
            </tr>
            <tr>
              <td style={{ paddingLeft: "40%" }}>(সীলমোহর)</td>
            </tr>
          </table>
          <div className="formfooter">
            <p>বিষয় : Computer Science and Engineering </p>
            <br />
            <p>পরীক্ষা :</p>
            <br />
            <p>
              প্রফেসর/ড./জনাব
              ........................................................................................................................................................................................................
              কে মোট =
              ..................................................................................................
              টাকা{" "}
            </p>
            <p>
              (কথায়)
              ................................................................................................................................................................................................................................................................................................
              মাত্র প্রদান করুন ।{" "}
            </p>
            <p>বিল সংশ্লিষ্ট চেক বুঝে পেলাম</p>
          </div>
          <table className="formfooter2">
            <tr>
              <td>.......................................</td>
              <td>.............................</td>
              <td>...........................</td>
              <td>..........................</td>
            </tr>
            <tr>
              <td>তারিখসহ গ্রহণকারীর স্বাক্ষর</td>
              <td>বিল সহকারী</td>
              <td>সেকশন অফিসার</td>
              <td>উপ-পরীক্ষা নিয়ন্ত্রক, চ.বি</td>
            </tr>
          </table>
          <div className="formfooter">
            <p
              style={{
                textAlign: "center",
                fontSize: "12px",
                marginTop: "1em",
              }}
            >
              <b>পরীক্ষা পারিতোষিক বিল প্রাপ্তি স্বীকার</b>
            </p>
            <br />
            <p>
              বিষয় :
              ...................................................................................................................................................................
              পরীক্ষা :
              ..........................................................................................................................................................
            </p>
            <br />
            <p>
              প্রফেসর/ড./জনাব
              .............................................................................................................................................................................................................................
              কে মোট =
              ...........................................................................
              টাকা{" "}
            </p>
            <p>
              (কথায়)
              ................................................................................................................................................................................................................................................................................................
              প্রদান করা হল ।{" "}
            </p>
            <div className="footerlast">
              <p>
                ..............................................................{" "}
                <br />
                হিসাব নিয়ামক/উপ-হিসাব নিয়ামক
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeacherPanel;
