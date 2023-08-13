import "./index.css";

const Ldse = () => (
  <div className="cont1-form1-ls">
    <h1 className="head1-form1-ls">LSDE(DR Laser)</h1>
    <div>
      <form>
        <div>
          <div className="batchcont2-form1-ls">
            <div className="batchcont2-inner-ls">
              <label className="label1-ls">in Depth (nm) :</label>
              <input type="text" className="input1-ls" />
            </div>
          </div>
          <div className="batchbtn-cont-ls">
            <button className="batch-button-ls">Save</button>
          </div>
        </div>
      </form>
      <hr className="line" />
      <div className="cont-tex">
        <h1 className="head1-form1">LDSE(DR Laser)</h1>
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

          <div class="vl1-ldse"></div>
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

          <div class="vl2-ldse"></div>
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

export default Ldse;
