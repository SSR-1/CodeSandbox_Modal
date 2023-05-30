import React, { useState } from "react";
import CustomModal from "./CustomModal";
import {
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
  Card,
  CardContent,
  Typography,
  Avatar
} from "@material-ui/core";

const MyComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    role: "",
    isActive: false,
    photo: null
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = () => {
    console.log("Form submitted:", formValues);
    closeModal();
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const fieldValue =
      type === "checkbox" ? checked : type === "file" ? files[0] : value;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: fieldValue
    }));
  };

  return (
    <div>
      <Button variant="contained" onClick={openModal}>
        Open Modal
      </Button>

      <CustomModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleFormSubmit}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent
                style={{
                  height: "0",
                  paddingBottom: "100%",
                  position: "relative",
                  textAlign: "center"
                }}
              >
                <label htmlFor="upload-photo" style={{ position: "relative" }}>
                  <input
                    type="file"
                    id="upload-photo"
                    name="photo"
                    style={{ display: "none" }}
                    onChange={handleInputChange}
                  />
                  <Avatar
                    alt="Profile Photo"
                    src={
                      formValues.photo
                        ? URL.createObjectURL(formValues.photo)
                        : ""
                    }
                    style={{
                      width: "60px",
                      height: "60px",
                      margin: "0 auto",
                      marginBottom: "10px",
                      cursor: "pointer"
                    }}
                  />
                  {!formValues.photo && (
                    <Typography
                      variant="caption"
                      color="textSecondary"
                      style={{ fontSize: "12px" }}
                    >
                      Please Upload Photo
                    </Typography>
                  )}
                </label>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  name="firstName"
                  label="First Name"
                  variant="outlined"
                  value={formValues.firstName}
                  onChange={handleInputChange}
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="lastName"
                  label="Last Name"
                  variant="outlined"
                  value={formValues.lastName}
                  onChange={handleInputChange}
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="email"
                  label="Email Address"
                  variant="outlined"
                  value={formValues.email}
                  onChange={handleInputChange}
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="phone"
                  label="Phone"
                  variant="outlined"
                  value={formValues.phone}
                  onChange={handleInputChange}
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="position"
                  label="Position"
                  variant="outlined"
                  value={formValues.position}
                  onChange={handleInputChange}
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={6}>
                <Select
                  name="role"
                  value={formValues.role}
                  onChange={handleInputChange}
                  fullWidth
                  variant="outlined"
                >
                  <MenuItem value="">Select Role</MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="user">User</MenuItem>
                </Select>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  style={{ fontSize: "12px" }}
                >
                  Please select a role
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Switch
                      name="isActive"
                      checked={formValues.isActive}
                      onChange={handleInputChange}
                    />
                  }
                  label="Active"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CustomModal>
    </div>
  );
};

export default MyComponent;
