import "./index.css";

const Annealing = () => (
  <div className="cont1-form1-annealing">
    <h1 className="head1-form1-annealing"> ANNEALING</h1>
    <div>
      <form>
        <div className="cont-shift-annealing">
          <div className="cont3-inner-annealing">
            <label className="label2-annealing">Select Stack :</label>
            <select className="dropdown-form1-annealing">
              <option selected disabled hidden>
                Select Stack
              </option>
              <option>S1</option>
              <option>S2</option>
            </select>
          </div>
          <div className="cont3-inner-annealing">
            <label className="label2-annealing">TUBE :</label>
            <select className="dropdown-form1-annealing">
              <option selected disabled hidden>
                Select Tube
              </option>
              <option>Left 1</option>
              <option>Right 1</option>
              <option>Left 2</option>
              <option>Right 2</option>
            </select>
          </div>
        </div>
        <div>
          <div className="batchcont2-form1-annealing">
            <div className="batchcont2-inner-annealing">
              <label className="label1-annealing">BOAT :</label>
              <input type="text" className="input1-annealing" />
            </div>
            <div className="batchcont2-inner2-annealing">
              <label className="label1-annealing">Rsheet(n/sq) :</label>
              <input type="text" className="input2-annealing" />
            </div>
          </div>
          <div className="batchcont3-inner3-annealing">
            <label className="label1-annealing">Recipe Name :</label>
            <input type="text" className="input2-annealing" />
          </div>
          <div className="batchbtn-cont-annealing">
            <button className="batch-button-annealing">Save</button>
          </div>
        </div>
      </form>
      <hr className="line" />
      <div className="cont-tex">
        <h1 className="head1-form1">Annealing</h1>
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

export default Annealing;
