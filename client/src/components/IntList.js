import React from 'react'
import { useState, useEffect } from 'react';
import { forwardRef } from 'react';
import "../App.css"
import axios from 'axios'
import { useHistory } from "react-router-dom";
import MaterialTable from 'material-table'
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteRounded from '@material-ui/icons/DeleteRounded';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Refresh from '@material-ui/icons/Refresh';
import VisibilityIcon from '@material-ui/icons/Visibility';


const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteRounded {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
    Refresh: forwardRef((props, ref) => <Refresh {...props} ref={ref} />),
    VisibilityIcon: forwardRef((props, ref) => <VisibilityIcon {...props} ref={ref} />) 
  };
  const tableRef = React.createRef();
  const api = axios.create({
    baseURL: `https://leloux.herokuapp.com/crud`
  });
  

function IntList() {
    let history = useHistory();
        var col=[
          //{ title: 'Identifiant', field: 'id', editable: false},
          { title: 'Propriétaire', field: 'owner'},
          { title: 'Marque', field: 'marque' },
          { title: 'Modele', field: 'modele' },
          { title: 'Immatriculation', field: 'immat' },
          //{ title: 'Réparateurs', field: 'repa' },
          { title: 'Action', field: 'action'},
          { title: 'Systeme', field: 'syst'},
          { title: 'Sous-Systeme', field: 'ssyst'},
          { title: 'Organe', field: 'org'},
      
      ];
        const [data, setData] = useState([]); //table data


      
        useEffect(() => { 
          api.get("/interventions")
              .then(res => {               
                  setData(res.data.data)
               })
               .catch(error=>{
                   console.log("Error")
               })
        }, [])
      

      
        
    return(
    <div class='mati'>
<MaterialTable
tableRef={tableRef}
icons={tableIcons}
title="Liste D'interventions"
columns={col}
data={data}
options={{
    headerStyle: {
        position: 'sticky', 
        top: 0, 
      backgroundColor: '#707cbd',
      color: '#F5F5F5',
      fontSize:'15px',
      fontWeight: 'bold'
    },
    minBodyHeight: '69.7vh',
    maxBodyHeight: '69.7vh',
    maxWidth: '100vh',
    exportButton: true,
    searchPlaceholder: "Rechercher",
    actionsColumnIndex: -1 
  }}
  actions={[
    {
      icon: VisibilityIcon,
      tooltip: 'Plus de details',
      onClick: (event, rowData) => {history.push(`/reparateurs/intervention/${rowData.id}`);}
    },
    {
      icon: AddBox,
      tooltip: 'Ajouter',
      isFreeAction: true,
      onClick: (event) => history.push('/reparateurs/addintervention')
    }
  ]}
  editable={{
 
    }}
  localization={{
    body: {
        emptyDataSourceMessage: "Pas d'enregistrement à afficher",
        addTooltip: 'Ajouter',
        deleteTooltip: 'Supprimer',
        editTooltip: 'Editer',
        filterRow: {
            filterTooltip: 'Filtrer'
        },
        editRow: {
            deleteText: 'Voulez-vous supprimer cette ligne?',
            cancelTooltip: 'Annuler',
            saveTooltip: 'Enregistrer'
        }
    },
    grouping: {
        placeholder: "Tirer l'entête ...",
        groupedBy: 'Grouper par:'
    },
    header: {
        actions: 'Actions'
    },
    pagination: {
        labelDisplayedRows: '{from}-{to} de {count}',
        labelRowsSelect: 'lignes',
        labelRowsPerPage: 'lignes par page:',
        firstAriaLabel: 'Première page',
        firstTooltip: 'Première page',
        previousAriaLabel: 'Page précédente',
        previousTooltip: 'Page précédente',
        nextAriaLabel: 'Page suivante',
        nextTooltip: 'Page suivante',
        lastAriaLabel: 'Dernière page',
        lastTooltip: 'Dernière page'
    },
    toolbar: {
        addRemoveColumns: 'Ajouter ou supprimer des colonnes',
        nRowsSelected: '{0} ligne(s) sélectionée(s)',
        showColumnsTitle: 'Voir les colonnes',
        showColumnsAriaLabel: 'Voir les colonnes',
        exportTitle: 'Exporter',
        exportAriaLabel: 'Exporter',
        exportName: 'Exporter en CSV',
        searchTooltip: 'Chercher',
        searchPlaceholder: 'Chercher'
    }
}}

/>
    </div>)
}
export default IntList;
