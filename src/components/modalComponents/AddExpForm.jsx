import Button from '@mui/material/Button';
import { Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { postExperiencesAction } from '../../redux/actions';
import { useState, useEffect } from 'react'
import { getExperiencesAction } from '../../redux/actions'

const AddExpForm = (props) => {

    const dispatch = useDispatch()

    const [img, setImg] = useState(null)
    const [fileDataURL, setFileDataURL] = useState(null);

    useEffect(() => {
        let fileReader, isCancel = false;
        if (img) {
            fileReader = new FileReader();
            fileReader.onload = (e) => {
                const { result } = e.target;
                if (result && !isCancel) {
                    setFileDataURL(result)
                }
            }
            fileReader.readAsDataURL(img);
        }
        return () => {
            isCancel = true;
            if (fileReader && fileReader.readyState === 1) {
                fileReader.abort();
            }
        }

    }, [img]);

    const [newExp, setNewExp] = useState({

        role: '',
        company: '',
        startDateM: '',
        startDateY: '',
        endDateM: '',
        endDateY: '',
        description: '',
        area: '',

    })

    const handleChange = (propertyName, propertyValue) => {
        setNewExp({
            ...newExp,
            [propertyName]: propertyValue,
        })
    }

    const subAddExp = (e) => {
        console.log(newExp);
        e.preventDefault()
        let body = {
            'role': newExp.role,
            'company': newExp.company,
            'startDate': `${newExp.startDateY}-${newExp.startDateM}-01`,
            'endDate': `${newExp.endDateY}-${newExp.endDateM}-01`,
            'description': newExp.description,
            'area': newExp.area
        }
        dispatch(postExperiencesAction(body, img))
        props.handleClosed()
        setImg(null)
        setFileDataURL(null)

    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton onHide={() => {
                props.handleClosed()
                setImg(null)
                setFileDataURL(null)
            }}>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modifica esperienza
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="modalFormNotCenter">
                    <div>
                        <p>Qualifica*</p>
                        <input className="inputForm" type="text" placeholder="Esempio: Retail Sales Manager" required onChange={(e) => {
                            handleChange('role', e.target.value)
                        }} />
                    </div>
                    <div>
                        <p>Nome Azienda*</p>
                        <input className="inputForm" type="text" placeholder="Esempio: Microsoft" required onChange={(e) => {
                            handleChange('company', e.target.value)
                        }} />
                    </div>
                    <div>
                        <p>Località*</p>
                        <input className="inputForm" type="text" placeholder="Esempio: Milano, Italia" required onChange={(e) => {
                            handleChange('area', e.target.value)
                        }} />
                    </div>
                    <div>
                        <p>Data di inizio*</p>
                        <select className="myDate" aria-required="false" required onChange={(e) => {
                            handleChange('startDateM', e.target.value)
                        }}>
                            <option value="">Mese</option>
                            <option value="1">Gennaio</option>
                            <option value="2">Febbraio</option>
                            <option value="3">Marzo</option>
                            <option value="4">Aprile</option>
                            <option value="5">Maggio</option>
                            <option value="6">Giugno</option>
                            <option value="7">Luglio</option>
                            <option value="8">Agosto</option>
                            <option value="9">Settembre</option>
                            <option value="10">Ottobre</option>
                            <option value="11">Novembre</option>
                            <option value="12">Dicembre</option>
                        </select>
                        <select className="myDate" aria-required="true" required
                            onChange={(e) => {
                                handleChange('startDateY', e.target.value)
                            }}>
                            <option value="">Anno</option>

                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                            <option value="1996">1996</option>
                            <option value="1995">1995</option>
                            <option value="1994">1994</option>
                            <option value="1993">1993</option>
                            <option value="1992">1992</option>
                            <option value="1991">1991</option>
                            <option value="1990">1990</option>
                            <option value="1989">1989</option>
                            <option value="1988">1988</option>
                            <option value="1987">1987</option>
                            <option value="1986">1986</option>
                            <option value="1985">1985</option>
                            <option value="1984">1984</option>
                            <option value="1983">1983</option>
                            <option value="1982">1982</option>
                            <option value="1981">1981</option>
                            <option value="1980">1980</option>
                            <option value="1979">1979</option>
                            <option value="1978">1978</option>
                            <option value="1977">1977</option>
                            <option value="1976">1976</option>
                            <option value="1975">1975</option>
                            <option value="1974">1974</option>
                            <option value="1973">1973</option>
                            <option value="1972">1972</option>
                            <option value="1971">1971</option>
                            <option value="1970">1970</option>
                            <option value="1969">1969</option>
                            <option value="1968">1968</option>
                            <option value="1967">1967</option>
                            <option value="1966">1966</option>
                            <option value="1965">1965</option>
                            <option value="1964">1964</option>
                            <option value="1963">1963</option>
                            <option value="1962">1962</option>
                            <option value="1961">1961</option>
                            <option value="1960">1960</option>
                            <option value="1959">1959</option>
                            <option value="1958">1958</option>
                            <option value="1957">1957</option>
                            <option value="1956">1956</option>
                            <option value="1955">1955</option>
                            <option value="1954">1954</option>
                            <option value="1953">1953</option>
                            <option value="1952">1952</option>
                            <option value="1951">1951</option>
                            <option value="1950">1950</option>
                            <option value="1949">1949</option>
                            <option value="1948">1948</option>
                            <option value="1947">1947</option>
                            <option value="1946">1946</option>
                            <option value="1945">1945</option>
                            <option value="1944">1944</option>
                            <option value="1943">1943</option>
                            <option value="1942">1942</option>
                            <option value="1941">1941</option>
                            <option value="1940">1940</option>
                            <option value="1939">1939</option>
                            <option value="1938">1938</option>
                            <option value="1937">1937</option>
                            <option value="1936">1936</option>
                            <option value="1935">1935</option>
                            <option value="1934">1934</option>
                            <option value="1933">1933</option>
                            <option value="1932">1932</option>
                            <option value="1931">1931</option>
                            <option value="1930">1930</option>
                            <option value="1929">1929</option>
                            <option value="1928">1928</option>
                            <option value="1927">1927</option>
                            <option value="1926">1926</option>
                            <option value="1925">1925</option>
                            <option value="1924">1924</option>
                            <option value="1923">1923</option>
                            <option value="1922">1922</option>
                        </select>
                    </div>

                    <div>
                        <p>Data di fine</p>

                        <select className="myDate" aria-required="false"
                            onChange={(e) => {
                                handleChange('endDateM', e.target.value)
                            }}>
                            <option value="">Mese</option>

                            <option value="1">Gennaio</option>
                            <option value="2">Febbraio</option>
                            <option value="3">Marzo</option>
                            <option value="4">Aprile</option>
                            <option value="5">Maggio</option>
                            <option value="6">Giugno</option>
                            <option value="7">Luglio</option>
                            <option value="8">Agosto</option>
                            <option value="9">Settembre</option>
                            <option value="10">Ottobre</option>
                            <option value="11">Novembre</option>
                            <option value="12">Dicembre</option>
                        </select>
                        <select className="myDate" aria-required="true" required=""
                            onChange={(e) => {
                                handleChange('endDateY', e.target.value)
                            }}>
                            <option value="">Anno</option>

                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                            <option value="1996">1996</option>
                            <option value="1995">1995</option>
                            <option value="1994">1994</option>
                            <option value="1993">1993</option>
                            <option value="1992">1992</option>
                            <option value="1991">1991</option>
                            <option value="1990">1990</option>
                            <option value="1989">1989</option>
                            <option value="1988">1988</option>
                            <option value="1987">1987</option>
                            <option value="1986">1986</option>
                            <option value="1985">1985</option>
                            <option value="1984">1984</option>
                            <option value="1983">1983</option>
                            <option value="1982">1982</option>
                            <option value="1981">1981</option>
                            <option value="1980">1980</option>
                            <option value="1979">1979</option>
                            <option value="1978">1978</option>
                            <option value="1977">1977</option>
                            <option value="1976">1976</option>
                            <option value="1975">1975</option>
                            <option value="1974">1974</option>
                            <option value="1973">1973</option>
                            <option value="1972">1972</option>
                            <option value="1971">1971</option>
                            <option value="1970">1970</option>
                            <option value="1969">1969</option>
                            <option value="1968">1968</option>
                            <option value="1967">1967</option>
                            <option value="1966">1966</option>
                            <option value="1965">1965</option>
                            <option value="1964">1964</option>
                            <option value="1963">1963</option>
                            <option value="1962">1962</option>
                            <option value="1961">1961</option>
                            <option value="1960">1960</option>
                            <option value="1959">1959</option>
                            <option value="1958">1958</option>
                            <option value="1957">1957</option>
                            <option value="1956">1956</option>
                            <option value="1955">1955</option>
                            <option value="1954">1954</option>
                            <option value="1953">1953</option>
                            <option value="1952">1952</option>
                            <option value="1951">1951</option>
                            <option value="1950">1950</option>
                            <option value="1949">1949</option>
                            <option value="1948">1948</option>
                            <option value="1947">1947</option>
                            <option value="1946">1946</option>
                            <option value="1945">1945</option>
                            <option value="1944">1944</option>
                            <option value="1943">1943</option>
                            <option value="1942">1942</option>
                            <option value="1941">1941</option>
                            <option value="1940">1940</option>
                            <option value="1939">1939</option>
                            <option value="1938">1938</option>
                            <option value="1937">1937</option>
                            <option value="1936">1936</option>
                            <option value="1935">1935</option>
                            <option value="1934">1934</option>
                            <option value="1933">1933</option>
                            <option value="1932">1932</option>
                            <option value="1931">1931</option>
                            <option value="1930">1930</option>
                            <option value="1929">1929</option>
                            <option value="1928">1928</option>
                            <option value="1927">1927</option>
                            <option value="1926">1926</option>
                            <option value="1925">1925</option>
                            <option value="1924">1924</option>
                            <option value="1923">1923</option>
                            <option value="1922">1922</option>
                        </select>
                    </div>

                    <div>
                        <p>Descrizione</p>
                        <textarea cols="30" rows="10" onChange={(e) => { handleChange('description', e.target.value) }}></textarea>
                    </div>

                    <div className='flexUploadFileExp'>
                        <input type="file" name='profile' onChange={(e) => (setImg(e.target.files[0]))} />
                        {img !== null && <img src={fileDataURL} alt='loaded_img' className='previewImgExp' />}
                    </div>

                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button style={{ "borderRadius": "100px" }} variant="contained" type="button" onClick={subAddExp}>Salva</Button>

            </Modal.Footer>
        </Modal>

    )

}

export default AddExpForm