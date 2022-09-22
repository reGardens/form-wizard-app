import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Counter } from "../../../features/counter/Counter";

// style
import "./style.scss";

// reducer
import { getDataKecamatan } from "../../../app/features/dataKecamatan";
import { getDataKelurahan } from "../../../app/features/dataKelurahan";
import { getDataKota } from "../../../app/features/dataKota";
import { getDataProvinsi } from "../../../app/features/dataProvinsi";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // get state dari store
  const dataProvinsi = useSelector((state) => state.provinsi.data);
  const dataKota = useSelector((state) => state.kota.data);
  const dataKecamatan = useSelector((state) => state.kecamatan.data);
  const dataKelurahan = useSelector((state) => state.kelurahan.data);
  // const name = document.querySelector(".provinsi");
  const [dataAll, setDataAll] = useState({
    fName: "",
    lName: "",
    bio: "",
    provin: "",
    kota: "",
    kec: "",
    kel: "",
  });
  const [disableBtn, setDisableBtn] = useState(false);
  const [button, setButton] = useState("Simpan");

  // console.log(dataAll);

  useEffect(() => {
    dispatch(getDataProvinsi());
  }, []);

  const handleKota = (e) => {
    // langsung set id // jika menggunakan useState akan mengembalikan nilai awal kosong
    const id = e.target.value;
    // console.log(id);
    dispatch(getDataKota(id));
  };

  const handleKecamatan = (e) => {
    const id = e.target.value;
    dispatch(getDataKecamatan(id));
    // localStorage.setItem("Kecamatan", e.target.value);
  };

  const handleKelurahan = (e) => {
    const id = e.target.value;
    dispatch(getDataKelurahan(id));
  };

  const handleOpsi = (e, name) => {
    setDataAll({
      ...dataAll,
      [e.target.name]: e.target.value,
    });
  };

  // handle simpan ke localStorage
  const handleSubmit = () => {
    if (button == "Simpan") {
      //   window.location.reload(false);
      localStorage.setItem("fName", dataAll.fName);
      localStorage.setItem("lName", dataAll.lName);
      localStorage.setItem("biodata", dataAll.bio);
      localStorage.setItem("provinsi", dataAll.provin);
      localStorage.setItem("kota", dataAll.kota);
      localStorage.setItem("kecamatan", dataAll.kec);
      localStorage.setItem("kelurahan", dataAll.kel);
      //   setDisableBtn(true);
      setButton("Next");
    } else if (button == "Next") {
      navigate("/");
    }
  };

  return (
    <div className="App">
      <p>Wizard 1</p>
      <div className="container">
        <div className="wrapper">
          <div className="listData">
            <p>Data</p>
            <p>First Name : {localStorage.getItem("fName")}</p>
            <p>Last Name : {localStorage.getItem("lName")}</p>
            <p>Biodata : {localStorage.getItem("biodata")}</p>
            <p>Provinsi : {localStorage.getItem("provinsi")}</p>
            <p>Kota : {localStorage.getItem("kota")}</p>
            <p>Kecamatan : {localStorage.getItem("kecamatan")}</p>
            <p>Kelurahan : {localStorage.getItem("kelurahan")}</p>
          </div>
          <div className="form">
            <div className="container">
              <label>First Name</label>
              <input type="text" name="fName" onChange={handleOpsi}></input>
              <label>Last Name</label>
              <input type="text" name="lName" onChange={handleOpsi}></input>
              <label>Biodata</label>
              <textarea name="bio" onChange={handleOpsi}></textarea>

              {/* mapping data Provinsi */}
              <label>Provinsi</label>
              <select onChange={handleKota} name="provin">
                <option>---select provinsi---</option>
                {dataProvinsi.length > 0
                  ? dataProvinsi.map((prov) => {
                      // console.log('data provinsi', prov.nama);
                      // setDataLagi(prov.nama);
                      return (
                        <>
                          <option
                            // className="provinsi"
                            key={prov.id}
                            value={prov.id}
                            // name={"provin"}
                            name={prov.nama}
                            // onChange={handleOpsi}
                            onChange={handleKota}
                          >
                            {prov.nama}
                          </option>
                        </>
                      );
                    })
                  : null}
              </select>
              {/* </label> */}

              {/* mapping data Kota */}
              <label>Kota</label>
              <select onChange={handleKecamatan}>
                {dataKota.length > 0
                  ? dataKota?.map((kota) => {
                      // console.log('data provinsi', kota.nama);
                      return (
                        <>
                          <option
                            key={kota.id}
                            value={kota.id}
                            name="kota"
                            onChange={handleOpsi}
                          >
                            {kota.nama}
                          </option>
                        </>
                      );
                    })
                  : null}
              </select>
              {/* </label> */}

              {/* mapping data Kecamatan */}
              <label>Kecamatan</label>
              <select onChange={handleKelurahan}>
                {dataKecamatan.length > 0
                  ? dataKecamatan?.map((kec) => {
                      // console.log('data provinsi', kec.nama);
                      return (
                        <>
                          <option
                            key={kec.id}
                            value={kec.id}
                            name="kec"
                            onChange={handleOpsi}
                          >
                            {kec.nama}
                          </option>
                        </>
                      );
                    })
                  : null}
              </select>
              {/* </label> */}

              {/* mapping data Kelurahan */}
              <label>Kelurahan</label>
              <select>
                {dataKelurahan.length > 0
                  ? dataKelurahan?.map((kel) => {
                      // console.log('data provinsi', kel.nama);
                      return (
                        <>
                          <option
                            key={kel.id}
                            value={kel.id}
                            name="kel"
                            onChange={handleOpsi}
                          >
                            {kel.nama}
                          </option>
                        </>
                      );
                    })
                  : null}
              </select>
              {/* </label> */}
              <div className="btn">
                <button onClick={null}>Hapus</button>
                <button onClick={handleSubmit}>{button}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
