import "./index.css";
import Additional from "../aditional_info_data_time_batch";

const BackCoating = () => (
  <>
    <Additional />
    <div className="cont1-form1-Back">
      <h1 className="head1-form1-Back"> Back Loading Process</h1>
      <form>
        <div>
          <h1 className="head1-form2-Back">ALOX-1</h1>
          <div className="cont-shift-Back">
            <div className="cont3-inner-Back">
              <label className="label2-Back">Select Stack :</label>
              <select className="dropdown-form1-Back">
                <option selected disabled hidden>
                  Select Stack
                </option>
                <option>S1</option>
                <option>S2</option>
                <option>S3</option>
                <option>S4</option>
              </select>
            </div>
            <div className="cont3-inner-Back">
              <label className="label2-Back">TUBE :</label>
              <select className="dropdown-form1-Back">
                <option selected disabled hidden>
                  Select Tube
                </option>
                <option>Left</option>
                <option>Right</option>
              </select>
            </div>
          </div>
          <div>
            <div className="batchcont2-form1-Back">
              <div className="batchcont2-inner-Back">
                <label className="label1-Back">BOAT :</label>
                <input type="text" className="input1-Back" />
              </div>
              <div className="batchcont3-inner3-Back">
                <label className="label1-Back">Recipe Name :</label>
                <input type="text" className="input2-Back" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="head1-form2-Back">ALOX-2</h1>
          <div className="cont-shift-Back">
            <div className="cont3-inner-Back">
              <label className="label2-Back">Select Stack :</label>
              <select className="dropdown-form1-Back">
                <option selected disabled hidden>
                  Select Stack
                </option>
                <option>S1</option>
                <option>S2</option>
                <option>S3</option>
                <option>S4</option>
              </select>
            </div>
            <div className="cont3-inner-Back">
              <label className="label2-Back">TUBE :</label>
              <select className="dropdown-form1-Back">
                <option selected disabled hidden>
                  Select Tube
                </option>
                <option>Left</option>
                <option>Right</option>
              </select>
            </div>
          </div>
          <div>
            <div className="batchcont2-form1-Back">
              <div className="batchcont2-inner-Back">
                <label className="label1-Back">BOAT :</label>
                <input type="text" className="input1-Back" />
              </div>
              <div className="batchcont3-inner3-Back">
                <label className="label1-Back">Recipe Name :</label>
                <input type="text" className="input2-Back" />
              </div>
            </div>
          </div>
        </div>
        <div className="batchbtn-cont-Back">
          <button className="batch-button-Back" type="button">
            Save
          </button>
        </div>
      </form>
      <hr className="line" />
      <div className="cont-tex">
        <h1 className="head1-form1">ALOX-1</h1>
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

          <div class="vl1-inox"></div>
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

          <div class="vl2-inox"></div>
        </div>
        <div className="textarea-cont">
          <h1 className="head1-form2">Remarks</h1>
          <textarea rows="4" cols="50" className="input1"></textarea>
        </div>
      </div>
      <hr className="line" />
      <div className="cont-tex">
        <h1 className="head1-form1">ALOX-2</h1>
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
          <div class="vl1-inox1"></div>
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
        </div>
        <div class="vl2-inox1"></div>
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
  </>
);

export default BackCoating;
