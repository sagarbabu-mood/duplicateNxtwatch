import "./index.css";

const Pecvd = () => (
  <div className="cont1-form1-pecvd">
    <h1 className="head1-form1-pecvd"> PECVD PROCESS</h1>
    <div>
      <form>
        <div className="cont-shift-pecvd">
          <div className="cont3-inner-pecvd">
            <label className="label2-pecvd">Select Stack :</label>
            <select className="dropdown-form1-pecvd">
              <option selected disabled hidden>
                Select Stack
              </option>
              <option>S1</option>
              <option>S2</option>
              <option>S3</option>
              <option>S4</option>
              <option>S4</option>
            </select>
          </div>
          <div className="cont3-inner-pecvd">
            <label className="label2-pecvd">TUBE :</label>
            <select className="dropdown-form1-pecvd">
              <option selected disabled hidden>
                Select Tube
              </option>
              <option>Left 1</option>
              <option>Right 1</option>
            </select>
          </div>
        </div>
        <div>
          <div className="batchcont2-form1-pecvd">
            <div className="batchcont2-inner-pecvd">
              <label className="label1-pecvd">R1 :</label>
              <input type="text" className="input1-pecvd" />
            </div>
            <div className="batchcont2-inner2-pecvd">
              <label className="label1-pecvd">Thick(nm) :</label>
              <input type="text" className="input2-pecvd" />
            </div>
          </div>
          <div className="batchbtn-cont-pecvd">
            <button className="batch-button-pecvd">Save</button>
          </div>
        </div>
      </form>
      <hr className="line" />
      <div className="cont-tex">
        <h1 className="head1-form1">PECVD(Sin Coating)</h1>
        <div className="two-row-cont">
          <div>
            <h1 className="head1-form2">Loading</h1>

            <div className="batchcont2-inner">
              <label className="label1">Operator :</label>
              <input type="text" className="input1" />
            </div>
            <div className="batchcont2-inner4">
              <label className="label1">Input :</label>
              <input type="text" className="input1" />
            </div>
            <div className="batchcont2-inner3">
              <label className="label1">Output :</label>
              <input type="text" className="input1" />
            </div>
            <div className="batchcont2-inner5">
              <label className="label1">Breakage :</label>
              <input type="text" className="input1" />
            </div>
            <div className="batchcont2-inner6">
              <label className="label1">Cosmetics :</label>
              <input type="text" className="input1" />
            </div>
          </div>

          <div class="vl1-pecvd"></div>
          <div className="cont-line-spoler">
            <h1 className="head1-form2">Process</h1>

            <div className="batchcont2-inner">
              <label className="label1">Operator :</label>
              <input type="text" className="input1" />
            </div>
            <div className="batchcont2-inner4">
              <label className="label1">Input :</label>
              <input type="text" className="input1" />
            </div>
            <div className="batchcont2-inner3">
              <label className="label1">Output :</label>
              <input type="text" className="input1" />
            </div>
            <div className="batchcont2-inner5">
              <label className="label1">Breakage :</label>
              <input type="text" className="input1" />
            </div>
            <div className="batchcont2-inner6">
              <label className="label1">Cosmetics :</label>
              <input type="text" className="input1" />
            </div>
          </div>
        </div>
        <div className="two-row-cont1">
          <div>
            <h1 className="head1-form2">Unloading</h1>

            <div className="batchcont2-inner">
              <label className="label1">Operator :</label>
              <input type="text" className="input1" />
            </div>
            <div className="batchcont2-inner4">
              <label className="label1">Input :</label>
              <input type="text" className="input1" />
            </div>
            <div className="batchcont2-inner3">
              <label className="label1">Output :</label>
              <input type="text" className="input1" />
            </div>
            <div className="batchcont2-inner5">
              <label className="label1">Breakage :</label>
              <input type="text" className="input1" />
            </div>
            <div className="batchcont2-inner6">
              <label className="label1">Cosmetics :</label>
              <input type="text" className="input1" />
            </div>
          </div>

          <div class="vl2-pecvd"></div>
        </div>
        <div className="textarea-cont">
          <h1 className="head1-form2">Remarks</h1>
          <textarea rows="4" cols="50" className="input1"></textarea>
        </div>
        <div className="cont-btn">
          <button type="button" className="btn btn1">
            Preview
          </button>
          <button type="button" className="btn btn1">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Pecvd;
