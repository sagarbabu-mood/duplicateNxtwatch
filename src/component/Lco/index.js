import "./index.css";

const Lco = () => (
  <div className="cont1-form1-lco">
    <h1 className="head1-form1-lco">LCO LASER in Depth(nm)</h1>
    <div>
      <form>
        <div className="cont-shift-lco">
          <div className="cont3-inner-lco">
            <label className="label2-lco">LCO :</label>
            <select className="dropdown-form1-lco">
              <option selected disabled hidden>
                Select Stack
              </option>
              <option>LCO-B</option>
              <option>LCO-A</option>
            </select>
          </div>
          <div className="batchcont2-inner-lco">
            <label className="label1-lco">Value :</label>
            <input type="text" className="input1-lco" />
          </div>
        </div>
        <div>
          <div className="batchbtn-cont-lco">
            <button className="batch-button-lco">Save</button>
          </div>
        </div>
      </form>
      <hr className="line" />
      <div className="cont-tex">
        <h1 className="head1-form1">LCO(Laser)</h1>
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

          <div class="vl1-lco"></div>
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

          <div class="vl2-lco"></div>
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

export default Lco;
