<Grid item sm={12} md={4} sx={{ backgroundColor: "#FE4B24" }}>
          <Box className={styles.login_image}>
            <span className={styles.welcome_login}>
              Welcome <br /> Back!
            </span>
            <img src={loginlogo} alt="" />
          </Box>
        </Grid>


        <Grid item square="true" sx={{ marginLeft: "100px" }}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={logo} alt="" />
            <Typography component="h1" variant="h5">
              <b>Battery</b> Monitoring <br /> System
            </Typography>

            <Typography
              component="span"
              variant="subtitle1"
              color="tertiary"
              size="small"
            >
              Welcome back! Please login to your account
            </Typography>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Usename"
                name="email"
                autoComplete="email"
                autoFocus
                variant="filled"
             
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="id_password"
                autoComplete="current-password"
                variant="filled"
              />

            

              <FormControl sx={{ m: 1 }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  variant="filled"
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  sx={{
                    background: "lightgrey",
                    webkitTapHighlightColor: "transparent",
                  }}
                />
              </FormControl>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: red500 }}
              >
                Login
              </Button>

              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>




        <Grid item md={2}>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <Button
                  variant="contained"
                  {...bindTrigger(popupState)}
                  startIcon={<TranslateIcon />}
                  sx={{
                    borderRadius: "20px",
                    height: "28px",
                    width: "96px",
                    backgroundColor: "#EFEFEF",
                    color: "#808080",
                    fontWeight: "400",
                    fontSize: "12px",
                    fontFamily: "Inter",
                    border: "none",
                    top: "51px",
                    left: "900px",
                    "&:hover": {
                      backgroundColor: "#EFEFEF",
                      color: "#808080",
                    },
                  }}
                >
                  English
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>Persian</MenuItem>
                  <MenuItem onClick={popupState.close}>Arabic</MenuItem>
                  <MenuItem onClick={popupState.close}>France</MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        </Grid>