import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {
  Box,
  Button,
  TextField,
  Grid,
  MenuItem,
  CircularProgress,
} from "@mui/material";

// Validation schema
const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Bắt buộc"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Số điện thoại không hợp lệ")
    .required("Bắt buộc"),
  pinCode: Yup.string()
    .matches(/^[0-9]{6}$/, "Mã bưu điện không hợp lệ")
    .required("Bắt buộc"),
  address: Yup.string().required("Bắt buộc"),
  locality: Yup.string().required("Bắt buộc"),
  city: Yup.string().required("Bắt buộc"),
  state: Yup.string().required("Bắt buộc"),
});

const AddressForm = ({ handleClose }) => {
  // ================= STATE =================
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const [loadingProvince, setLoadingProvince] = useState(false);
  const [loadingDistrict, setLoadingDistrict] = useState(false);
  const [loadingWard, setLoadingWard] = useState(false);

  // ================= FORMIK =================
  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      pinCode: "",
      address: "",
      locality: "",
      city: "",
      state: "",
    },
    validationSchema: ContactSchema,
    onSubmit: (values) => {
      console.log("FORM DATA:", values);
      handleClose();
    },
  });

  // ================= LOAD PROVINCES =================
  useEffect(() => {
    const fetchProvinces = async () => {
      setLoadingProvince(true);
      try {
        const res = await axios.get("https://provinces.open-api.vn/api/p/");
        setProvinces(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingProvince(false);
      }
    };

    fetchProvinces();
  }, []);

  // ================= HANDLE CHANGE =================
  const handleProvinceChange = async (e) => {
    const value = e.target.value;

    formik.setFieldValue("state", value);
    formik.setFieldValue("city", "");
    formik.setFieldValue("locality", "");

    setDistricts([]);
    setWards([]);

    const province = provinces.find((p) => p.name === value);

    if (province) {
      setLoadingDistrict(true);
      try {
        const res = await axios.get(
          `https://provinces.open-api.vn/api/p/${province.code}?depth=2`,
        );
        setDistricts(res.data.districts);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingDistrict(false);
      }
    }
  };

  const handleDistrictChange = async (e) => {
    const value = e.target.value;

    formik.setFieldValue("city", value);
    formik.setFieldValue("locality", "");

    setWards([]);

    const district = districts.find((d) => d.name === value);

    if (district) {
      setLoadingWard(true);
      try {
        const res = await axios.get(
          `https://provinces.open-api.vn/api/d/${district.code}?depth=2`,
        );
        setWards(res.data.wards);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingWard(false);
      }
    }
  };

  // ================= UI =================
  return (
    <Box
      sx={{
        maxWidth: {
          xs: "100%",
          sm: 800,
          md: 1000,
          lg: 1400,
        },
        width: "100%",
        mx: "auto",
        p: {
          xs: 2,
          sm: 3,
          md: 4,
        },
        borderRadius: "20px",
        backgroundColor: "#fff",
      }}
      className="shadow-lg"
    >
      <p className="text-xl font-semibold text-center pb-6 text-gray-800">
        Thêm địa chỉ giao hàng
      </p>

      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2.5}>
          {/* NAME */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="name"
              label="Họ và tên"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>

          {/* PHONE */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              name="mobile"
              label="Số điện thoại"
              value={formik.values.mobile}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.mobile && Boolean(formik.errors.mobile)}
              helperText={formik.touched.mobile && formik.errors.mobile}
            />
          </Grid>

          {/* PINCODE */}
          <Grid item xs={6}>
            <TextField
              fullWidth
              name="pinCode"
              label="Mã bưu điện"
              value={formik.values.pinCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.pinCode && Boolean(formik.errors.pinCode)}
              helperText={formik.touched.pinCode && formik.errors.pinCode}
            />
          </Grid>

          {/* ADDRESS */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="address"
              label="Địa chỉ cụ thể"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </Grid>

          {/* PROVINCE */}
          <Grid item xs={6}>
            <TextField
              select
              fullWidth
              label="Tỉnh / Thành phố"
              value={formik.values.state}
              onChange={handleProvinceChange}
              error={formik.touched.state && Boolean(formik.errors.state)}
              helperText={formik.touched.state && formik.errors.state}
            >
              {loadingProvince ? (
                <MenuItem>
                  <CircularProgress size={20} />
                </MenuItem>
              ) : (
                provinces.map((p) => (
                  <MenuItem key={p.code} value={p.name}>
                    {p.name}
                  </MenuItem>
                ))
              )}
            </TextField>
          </Grid>

          {/* DISTRICT */}
          <Grid item xs={6}>
            <TextField
              select
              fullWidth
              label="Quận / Huyện"
              value={formik.values.city}
              onChange={handleDistrictChange}
              disabled={!districts.length}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            >
              {loadingDistrict ? (
                <MenuItem>
                  <CircularProgress size={20} />
                </MenuItem>
              ) : (
                districts.map((d) => (
                  <MenuItem key={d.code} value={d.name}>
                    {d.name}
                  </MenuItem>
                ))
              )}
            </TextField>
          </Grid>

          {/* WARD */}
          <Grid item xs={12}>
            <TextField
              select
              fullWidth
              name="locality" // 👈 BẮT BUỘC
              label="Phường / Xã"
              value={formik.values.locality}
              onChange={formik.handleChange}
              disabled={!wards.length}
              error={formik.touched.locality && Boolean(formik.errors.locality)}
              helperText={formik.touched.locality && formik.errors.locality}
            >
              {loadingWard ? (
                <MenuItem>
                  <CircularProgress size={20} />
                </MenuItem>
              ) : (
                wards.map((w) => (
                  <MenuItem key={w.code} value={w.name}>
                    {w.name}
                  </MenuItem>
                ))
              )}
            </TextField>
          </Grid>

          {/* SUBMIT */}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                py: "14px",
                borderRadius: "10px",
                fontWeight: 600,
                textTransform: "none",
              }}
            >
              Thêm địa chỉ
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddressForm;
