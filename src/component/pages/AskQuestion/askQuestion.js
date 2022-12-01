import React from 'react';
import Cards from '../Cards';
import Footer from '../Footer';
import Header from '../Header';
import RightNav from './RightNav';
import SvgImg from './Svg';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import { makeStyles, withStyles } from '@material-ui/core/styles';



  const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);
  
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

export default function AskQuestion() {
  


  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <>
        <Header />
        <section className="hero-area bg-white shadow-sm overflow-hidden">
          <span className="stroke-shape stroke-shape-1" />
          <span className="stroke-shape stroke-shape-2" />
          <span className="stroke-shape stroke-shape-3" />
          <span className="stroke-shape stroke-shape-4" />
          <span className="stroke-shape stroke-shape-5" />
          <span className="stroke-shape stroke-shape-6" />
          <div className="container">
            <div className="hero-content pt-80px pb-80px">
              <h2 className="section-title">Ask a public question</h2>
             <SvgImg/>
            </div>
            {/* end hero-content */}
          </div>
          {/* end container */}
        </section>
        {/*======================================
  END HERO AREA
======================================*/}
        {/* ================================
   START QUESTION AREA
================================= */}
        <section className="question-area pt-80px pb-40px">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="card card-item">
                  <form method="post" className="card-body">
                    <div className="input-box">
                      <label className="fs-14 text-black fw-medium mb-0">
                        Question Title
                      </label>
                      <p className="fs-13 pb-3 lh-20">
                        Be specific and imagine you’re asking a question to another
                        person
                      </p>
                      <div className="form-group">
                        <input
                          className="form-control form--control"
                          type="text"
                          name="text"
                          placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                        />
                      </div>
                    </div>
                    {/* end input-box */}
                    <div className="input-box">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <label className="fs-14 text-black fw-medium mb-0">
                            Tags
                          </label>
                          <p className="fs-13 pb-3 lh-20">
                            Add up to 5 tags to describe what your question is about:
                          </p>
                        </div>
                        <button
                          type="button"
                          className="popover-trigger btn border border-gray py-1 lh-18 px-2"
                          data-container="body"
                          data-toggle="popover"
                          data-placement="top"
                        >
                          <svg
                            aria-hidden="true"
                            className="svg-icon-color-gray"
                            width={14}
                            height={14}
                          >
                            <path d="M7 1a6 6 0 100 12A6 6 0 007 1zm1.06 9.06c-.02.63-.48 1.02-1.1 1-.57-.02-1.03-.43-1.01-1.06.02-.63.5-1.04 1.08-1.02.6.02 1.05.45 1.03 1.08zm.73-3.07l-.47.3c-.2.15-.36.36-.44.6a3.6 3.6 0 00-.08.65c0 .04-.03.14-.16.14h-1.4c-.14 0-.16-.09-.16-.13-.01-.5.11-.99.36-1.42A4.6 4.6 0 017.7 6.07c.15-.1.21-.21.3-.33a1.14 1.14 0 00.02-1.48c-.22-.26-.46-.4-.92-.4-.45 0-.83.23-1.02.52-.19.3-.16.63-.16.94H4.2c0-1.17.31-1.92.98-2.36a3.5 3.5 0 011.83-.44c.88 0 1.58.16 2.2.62.58.42.88 1.02.88 1.82 0 .5-.17.9-.43 1.24-.15.2-.44.47-.86.79h-.01z" />
                          </svg>
                        </button>
                      </div>
                      <div className="form-group">
                        <input
                          className="input-tags input--tags"
                          type="text"
                          name="tags"
                          placeholder="e.g. javascript"
                        />
                      </div>
                    </div>
                    {/* end input-box */}
                    <div className="input-box">
                      <label className="fs-14 text-black fw-medium mb-0">
                        Category
                      </label>
                      <p className="fs-13 pb-3 lh-20">
                        Please choose the appropriate section so the question can be
                        searched easily.
                      </p>
                      <FormControl  style={{width:"100%"}} variant="outlined" size="small" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">category</InputLabel>
            <Select
              native
              // value={state.age}
              onChange={handleChange}
              label="10 per page"
              inputProps={{
                name: '10 per page',
                id: 'outlined-age-native-simple',
              }}
            >
              <option aria-label="None" value="" />
              <option value={1}>Analytics</option>
              <option value={2}>Communication</option>
              <option value={3}>Company</option>
              <option value={4}>Lnaguage</option>
              <option value={5}>Management</option>
              <option value={6}>Programmers</option>
              <option value={7}>Programes</option>
              <option value={8}>University</option>
            </Select>
          </FormControl>
                    </div>
                    {/* end input-box */}
                    <div className="input-box">
                      <label className="fs-14 text-black fw-medium mb-0">
                        Details
                      </label>
                      <p className="fs-13 pb-3 lh-20">
                        Include all the information someone would need to answer your
                        question
                      </p>
                      <div className="form-group">
                        <textarea
                          className="form-control form--control user-text-editor"
                          rows={10}
                          cols={40}
                          defaultValue={""}
                        />
                        <div className="d-flex align-items-center pt-2">
                          <div className="mr-3">
                            ```{" "}
                            <code className="badge bg-gray border border-gray text-gray">
                              code
                            </code>{" "}
                            ```
                          </div>
                          <div className="mr-3 fw-bold">**bold**</div>
                          <div className="mr-3 font-italic">*italic*</div>
                          <div>&gt;quote</div>
                        </div>
                      </div>
                    </div>
                    {/* end input-box */}
                    <div className="input-box">
                      <label className="fs-14 text-black fw-medium">Image</label>
                      <div className="form-group">
                        <div className="file-upload-wrap file-upload-layout-2">
                          <input
                            type="file"
                            name="files[]"
                            className="file-upload-input"
                            multiple=""
                          />
                          <span className="file-upload-text d-flex align-items-center justify-content-center">
                            <i className="la la-cloud-upload mr-2 fs-24" />
                            Drop files here or click to upload.
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* end input-box */}
                    <div className="input-box pt-2">
                      <div className="form-group">
                        <div className="custom-control custom-checkbox fs-13 mb-1">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="notifiedMe"
                          />
                          <label
                            className="custom-control-label custom--control-label"
                            htmlFor="notifiedMe"
                          >
                            Get notified by email when someone answers this question.
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox fs-13">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="youAgreeCheckBox"
                          />
                          <label
                            className="custom-control-label custom--control-label"
                            htmlFor="youAgreeCheckBox"
                          >
                            By asking your question, you agree to the{" "}
                            <a
                              href="privacy-policy.html"
                              className="text-color hover-underline"
                            >
                              Privacy Policy.
                            </a>
                          </label>
                        </div>
                      </div>
                      <div className="btn-box">
                        <button type="submit" className="btn theme-btn">
                          Publish your question
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <RightNav />
            </div>
          </div>
        </section>

        {/* =======================  CARDS  ====================== */}
        <Cards />

        {/* =======================  FOOTER AREA  ====================== */}
        <Footer />
      </>

    </>
  )
}
