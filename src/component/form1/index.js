import "./index.css";

const Form1 = () => (
  <div className="cont1-form1">
    <h1 className="head1-form1">Wafer Size</h1>
    <div>
      <form>
        <div className="cont2-form1">
          <div className="cont2-inner">
            <label className="label1">182 Pseudo Sq.mm :</label>
            <input type="text" className="input1" />
          </div>
          <div>
            <label className="label1">Thickness(um) :</label>
            <input type="text" className="input2" />
          </div>
        </div>
        <div className="cont-shift">
          <div className="cont3-inner">
            <label className="label2">Shift Details :</label>
            <select className="dropdown-form1">
              <option selected disabled hidden>
                Select Shift
              </option>
              <option>Shift I</option>
              <option>Shift II</option>
              <option>Shift III</option>
            </select>
          </div>
          <div>
            <label className="label1">Batch Number :</label>
            <button type="button" className="btn">
              Generate
            </button>
            <div className="cont-display">
              <h1 className="head-ran">12</h1>
            </div>
          </div>
        </div>
        <hr className="line" />
        <div>
          <h1 className="head1-form1">Batch Tex-SI Removal</h1>
          <div className="batchcont2-form1">
            <div className="batchcont2-inner">
              <label className="label1">Weight(gm)-Loading :</label>
              <input type="text" className="input1" />
            </div>
            <div className="batchcont2-inner2">
              <label className="label1">Weight(gm)-Unloading :</label>
              <input type="text" className="input2" />
            </div>
          </div>
          <div className="batchcont3-inner3">
            <label className="label1">Total SI Removed :</label>
            <input type="text" className="input2" />
          </div>
          <div className="batchbtn-cont">
            <button className="batch-button">Save</button>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default Form1;
