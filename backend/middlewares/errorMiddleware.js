import React, { useState, useEffect } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
    CardTitle
} from "reactstrap";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PanelHeader from "components/PanelHeader/PanelHeader.js";
// import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import { post } from "../service/apiService";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import TimeAgo from 'service/TimeAgo';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${theme.breakpoints.up('md')} .MuiTableCell-head`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${theme.breakpoints.up('md')} .MuiTableCell-body`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function RDPList() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [rdpList, setRDPList] = useState([]);
    const navigate = useNavigate(); // Move useNavigate inside the functional component

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await post("/getRDPList", {});
                console.log("Response from API:", data);
                setRDPList(data.RDPList);
            } catch (error) {
                console.error("Error occurred while fetching data:", error);
            }
        };

        fetchData();
    }, []);

    function getUrlDetails(index) {
        console.log('Details clicked for index:', index);
        navigate(`/line-chart/${index + 1}`);
    }

    // Define the style object for the Modal component
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [formValues, setFormValues] = useState({
        ip: "",
        user: "",
        os:"",
        ram:"",
        hdd: "",
        assigned_to:""
        
    });

    // Update state when form fields change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            const response = await post("/addRDP", {
                data: formValues, 
            });
           
        } catch (error) {
            console.error("Error adding URL:", error);
            
        }
    };

    return (
        <>
            <PanelHeader size="sm" />
            <Card>
                <CardHeader>
                    <CardTitle tag="h4">RDP List </CardTitle>
                    <Button onClick={handleOpen}>Add</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Row >
                                <Col md="12">

                                    <CardHeader>
                                        <h5 className="title"> Add RDP</h5>
                                    </CardHeader>

                                    <Form onSubmit={handleSubmit}>
                                        <Row className='mt-3'>
                                            <Col className="pr-1" md="6">
                                                <FormGroup>
                                                    <label>RDP IP</label>
                                                    <Input
                                                        name="ip"
                                                        value={formValues.ip}
                                                        onChange={handleInputChange}
                                                        placeholder="00.00.00.000 "
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="px-1" md="6">
                                                <FormGroup>
                                                    <label>User</label>
                                                    <Input
                                                        name="user"
                                                        value={formValues.user}
                                                        onChange={handleInputChange}
                                                        placeholder="sde_00"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-1" md="6">
                                                <FormGroup>
                                                    <label>OS Version</label>
                                                    <Input
                                                        name="os"
                                                        value={formValues.os}
                                                        onChange={handleInputChange}
                                                        placeholder="win/Linux/ 10/11 "
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="px-1" md="6">
                                                <FormGroup>
                                                    <label>RAM</label>
                                                    <Input
                                                        name="ram"
                                                        value={formValues.ram}
                                                        onChange={handleInputChange}
                                                        placeholder="in GB"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-1" md="6">
                                                <FormGroup>
                                                    <label>HDD</label>
                                                    <Input
                                                        name="hdd"
                                                        value={formValues.hdd}
                                                        onChange={handleInputChange}
                                                        placeholder="storage in GB "
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="px-1" md="6">
                                                <FormGroup>
                                                    <label>Assigned To </label>
                                                    <Input
                                                        name="assigned_to"
                                                        value={formValues.assigned_to}
                                                        onChange={handleInputChange}
                                                        placeholder="username"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md="12 float-center
                                            ">
                                            <Button color="secondary" type="submit">
                                                Submit
                                            </Button>
                                        </Col>
                                        </Row>
                                  
                                     
                                    </Form>


                                </Col>
                            </Row>
                        </Box>
                    </Modal>
                </CardHeader>
                <CardBody>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>S.No</StyledTableCell>
                                    <StyledTableCell align="center">IP</StyledTableCell>
                                    <StyledTableCell align="center">Status</StyledTableCell>
                                    <StyledTableCell align="center">User</StyledTableCell>
                                    <StyledTableCell align="center">Assigned To</StyledTableCell>
                                    <StyledTableCell align="center">Configuration</StyledTableCell>
                                    <StyledTableCell align="center">Last Updated</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rdpList.map((item, index) => (
                                    <StyledTableRow key={index}>
                                        <StyledTableCell>{index + 1}</StyledTableCell>
                                        <StyledTableCell align="center">{item.ip}</StyledTableCell>
                                        <StyledTableCell align="center">
                                            <span style={{
                                                display: 'inline-block',
                                                width: '10px',
                                                height: '10px',
                                                borderRadius: '50%',
                                                backgroundColor: item.status === 'active' ? 'green' : 'red'
                                            }} />
                                            {/* {item.status ? item.status : 'inactive'} */}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">{item.user}</StyledTableCell>
                                        <StyledTableCell align="center" className="cursor-pointer">{item.assigned_to}</StyledTableCell>
                                        <StyledTableCell align="center">{`OS ${item.config_os} RAM ${item.config_ram} HDD ${item.config_hdd}`}</StyledTableCell>

<StyledTableCell align="center">{item.last_updated != null ? <TimeAgo lastUpdated={item.last_updated}/> : "-"}</StyledTableCell>

                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardBody>
            </Card>
        </>
    );
}

export default RDPList;