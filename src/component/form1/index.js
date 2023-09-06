import "./index.css";
import Additional from "../aditional_info_data_time_batch";
import { useState } from "react";
import useScanDetection from "use-scan-detection";

const Form1 = () => {
  const [barcodescan, setbarcode] = useState("barcode not setted");

  useScanDetection({
    onComplete: setbarcode,
    minLength: 3,
  });

  return (
    <>
      <Additional barcodescan={barcodescan} />
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
              <div className="batchcont3-inner0">
                <label className="label1">Total SI Removed :</label>
                <input type="text" className="input2" />
              </div>
              <div className="batchbtn-cont">
                <button type="button" className="batch-button">
                  Save
                </button>
              </div>
            </div>
          </form>
          <hr className="line" />
          <div className="cont-tex">
            <h1 className="head1-form1">Batch Tex</h1>
            <div className="two-row-cont">
              <div>
                <h1 className="head1-form2">IR</h1>

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

              <div class="vl"></div>
              <div className="cont-line-spoler">
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
            </div>
            <div className="two-row-cont1">
              <div>
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

              <div class="vl1"></div>
              <div className="cont-line-spoler">
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
    </>
  );
};

export default Form1;
