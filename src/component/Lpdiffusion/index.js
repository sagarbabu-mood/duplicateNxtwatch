import "./index.css";

const Lpdiffusion = () => (
  <div className="cont1-form1-lp">
    <h1 className="head1-form1-lp">LP DIFFUSION</h1>
    <div>
      <form>
        <div className="cont-shift-lp">
          <div className="cont3-inner-lp">
            <label className="label2-lp">Select Stack :</label>
            <select className="dropdown-form1-lp">
              <option selected disabled hidden>
                Select Stack
              </option>
              <option>S1</option>
              <option>S2</option>
              <option>S3</option>
              <option>S4</option>
            </select>
          </div>
          <div className="cont3-inner-lp">
            <label className="label2-lp">TUBE :</label>
            <select className="dropdown-form1-lp">
              <option selected disabled hidden>
                Select Tube
              </option>
              <option>Left 1</option>
              <option>Right 1</option>
            </select>
          </div>
        </div>
        <div>
          <div className="batchcont2-form1-lp">
            <div className="batchcont2-inner-lp">
              <label className="label1">BOAT :</label>
              <input type="text" className="input1-lp" />
            </div>
            <div className="batchcont2-inner2-lp">
              <label className="label1-lp">Rsheet(n/sq) :</label>
              <input type="text" className="input2-lp" />
            </div>
          </div>
          <div className="batchcont3-inner3-lp">
            <label className="label1-lp">Recipe Name :</label>
            <input type="text" className="input2-lp" />
          </div>
          <div className="batchbtn-cont-lp">
            <button className="batch-button-lp">Save</button>
          </div>
        </div>
      </form>
      <hr className="line" />
      <div className="cont-tex">
        <h1 className="head1-form1">LP Deffusion</h1>
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

          <div class="vl1-lp"></div>
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

          <div class="vl2-lp"></div>
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

export default Lpdiffusion;
