import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useHistory, Redirect } from "react-router-dom";
import '../App.css' 
import { Link} from 'react-router-dom'
import { ArrowBackOutline } from 'react-ionicons'



const SignupForm = () => {
  document.title = "ajouter une intervention";
  const user = JSON.parse(localStorage.getItem('reauth'));
  const o = user.result.repa; 
  let history = useHistory();
  const formik = useFormik({
    initialValues: {
      owner: '',
      contact: '',
      email: '',
    },
    /*validationSchema: Yup.object({
      pro: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      con: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),*/
    onSubmit: values =>  {
      alert(JSON.stringify(values, null, 2));
      
      fetch('http://localhost:3001/crud/intervention', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values),
      }).then(res => {
        alert (res);
        history.push("/reparteurs/interventions");
      });
    },
  });
  return (
      <div class='container'>
        <div class='en'><Link class='ki'><ArrowBackOutline color={'#707cbd'}  title={'back'} height="25px" width="30px"/></Link><h1>Fiche d'intervention</h1></div>
        <div class='spc'></div>
    <form onSubmit={formik.handleSubmit} class='fi'>
    <div className='fg'>
      <label htmlFor="owner">Propriétaire</label>
      <div className='ind'>
      <input
        id="owner"
        name="owner"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.owner}
      />
      </div>
      {formik.touched.owner && formik.errors.owner ? (
        <div>{formik.errors.owner}</div>
      ) : null}

      </div>



    <div className='fg'>
      <label htmlFor="contact">Contact</label>
      <div className='ind'>
      <input
        id="contact"
        name="contact"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.contact}
      />
                  </div>
                  {formik.touched.contact && formik.errors.contact ? (
        <div>{formik.errors.contact}</div>
      ) : null}
            </div>

            {formik.touched.crat && formik.errors.crat ? (
        <div>{formik.errors.crat}</div>
      ) : null}
    <div className='fg'>
      <label htmlFor="crat">Date</label>
      <div className='ind'>
      <input
        id="crat"
        name="crat"
        type="date"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.crat}
      />
                  </div>
            </div>
            <div class='spc'></div>


    <div className='fg'>
      <label htmlFor="marque">Marque</label>
      <div className='ind'>
      <input
        id="marque"
        name="marque"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.marque}
      />
            </div>
            </div>

      {formik.touched.marque && formik.errors.marque ? (
        <div>{formik.errors.marque}</div>
      ) : null}
    <div className='fg'>
      <label htmlFor="modele">Modele</label>
      <div className='ind'>
      <input
        id="modele"
        name="modele"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.modele}
      />
                  </div>
            </div>

      {formik.touched.modele && formik.errors.modele ? (
        <div>{formik.errors.modele}</div>
      ) : null}

<div className='fg'>
      <label htmlFor="immat">Immatriculation</label>
      <div className='ind'>
      <input
        id="immat"
        name="immat"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.immat}
      />
      </div>
      </div>
      {formik.touched.immat && formik.errors.immat ? (
        <div>{formik.errors.immat}</div>
      ) : null}

<div className='fg'>
      <label htmlFor="year">Année</label>
      <div className='ind'>
      <input
        id="year"
        name="year"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.year}
      />
      </div>
      </div>
      {formik.touched.year && formik.errors.year ? (
        <div>{formik.errors.year}</div>
      ) : null}

<div className='fg'>
      <label htmlFor="nc">Numéro de chassis</label>
      <div className='ind'>
      <input
        id="nc"
        name="nc"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.nc}
      />
      </div>
      </div>
      {formik.touched.nc && formik.errors.nc ? (
        <div>{formik.errors.nc}</div>
      ) : null}

<div className='fg'>
      <label htmlFor="kil">Kilométrage</label>
      <div className='ind'>
      <input
        id="kil"
        name="kil"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.kil}
      />
      </div>
      </div>
      {formik.touched.kil && formik.errors.kil ? (
        <div>{formik.errors.kil}</div>
      ) : null}
      <div class='spc'></div>


    <div className='fg'>
      <label htmlFor="syst">Syst&egrave;me</label>
      <div className='ind'>
      <input
        id="syst"
        name="syst"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.syst}
      />
                  </div>
            </div>

            {formik.touched.syst && formik.errors.syst ? (
        <div>{formik.errors.syst}</div>
      ) : null}
    <div className='fg'>
      <label htmlFor="ssyst">Sous-syst&egrave;me</label>
      <div className='ind'>
      <input
        id="ssyst"
        name="ssyst"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.ssyst}
      />
                  </div>
            </div>

            {formik.touched.ssyst && formik.errors.ssyst ? (
        <div>{formik.errors.ssyst}</div>
      ) : null}
    <div className='fg'>
      <label htmlFor="org">Organe</label>
      <div className='ind'>
      <input
        id="org"
        name="org"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.org}
      />
                  </div>
            </div>


            {formik.touched.org && formik.errors.org ? (
        <div>{formik.errors.org}</div>
      ) : null}
    <div className='fg'>
      <label htmlFor="action">Action</label>
      <div className='ind'>
      <select id="action" name="action" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.action} >
   	<option>...</option>
   	<option>Remplacement</option>
   	<option>Depanage</option>
   	<option>Ajustement/Reglages</option>
   </select>
                  </div>
            </div>

            {formik.touched.action && formik.errors.action ? (
        <div>{formik.errors.action}</div>
      ) : null}
    <div className='fg'>
      <label htmlFor="pa">Prix d'achat</label>
      <div className='ind'>
      <input
        id="pa"
        name="pa"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.pa}
      />
                  </div>
            </div>


            {formik.touched.pa && formik.errors.pa ? (
        <div>{formik.errors.pa}</div>
      ) : null}
    <div className='fg'>
      <label htmlFor="pv">Prix de vente</label>
      <div className='ind'>
      <input
        id="pv"
        name="pv"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.pv}
      />
                  </div>
            </div>

            {formik.touched.pv && formik.errors.pv ? (
        <div>{formik.errors.pv}</div>
      ) : null}
            <div class='spc'></div>
    <div className='fg'>
      <label htmlFor="mo">Main d'oeuvre</label>
      <div className='ind'>
      <input
        id="mo"
        name="mo"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.mo}
      />
                  </div>
            </div>
            {formik.touched.mo && formik.errors.mo ? (
        <div>{formik.errors.mo}</div>
      ) : null}
    <div className='fg'>
      <label htmlFor="des">Description</label>
      <div className='ind'>
      <textarea
        id="des"
        name="des"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.des}
      ></textarea>
                  </div>
            </div>

            {formik.touched.des && formik.errors.des ? (
        <div>{formik.errors.des}</div>
      ) : null}
    <div className='fg'>
      <label htmlFor="pj">Pi&egrave;ces Jointes</label>
      <div className='ind'>
      <input
        id="pj"
        name="pj"
        type="file"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.pj}
      />
                  </div>
            </div>

      <input
        id="repa"
        name="repa"
        type="hidden"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.repa = o}
      />


      <button type="submit" class='soba'>Soumettre</button>
      <button type="reset" class='sobi'>Annuler</button>
    </form>
    </div>
  );
};
export default SignupForm;