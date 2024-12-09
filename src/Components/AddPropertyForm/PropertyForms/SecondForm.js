import { useForm, FormProvider, useWatch } from "react-hook-form";
import { FormRenderDynamic } from "./FormRenderDynamic/FormRenderDynamic";
import PropTypes from "prop-types";
import { AmminitiesSellCommercialFields, AmminitiesSellLandFields,AmminitiesSellResidentialFields } from "./DisplayJsons/Sell/Ammenities";
import { DisplaySellCommercialFields, DisplaySellLandFields, DisplaySellResidentialFields } from "./DisplayJsons/Sell/DisplayFields";
import { MiscellineousSellCommercialJson, MiscellineousSellLandJson, MiscellineousSellResidentialJson } from "./DisplayJsons/Sell/Miscellineous";
import { DisplayRentCommercialFields, DisplayRentLandFields, DisplayRentResidentialFields, DisplayRentPGFields } from "./DisplayJsons/Rent/DisplayFields";
import { AmminitiesRentCommercialFields, AmminitiesRentLandFields, AmminitiesRentResidentialFields, AmminitiesRentPGFields } from "./DisplayJsons/Rent/Ammenities";
import { MiscellineousRentCommercialJson, MiscellineousRentPGJson, MiscellineousRentLandJson, MiscellineousRentResidentialJson } from "./DisplayJsons/Rent/Miscellineous";
import { CommonNearByServices } from "./DisplayJsons/Sell/NearByServices";
export const SecondForm = ({setStep, propertytype, offerType, register, setValue, values, errors, setErrors}) => {
    const fields = {
        AmminitiesSellCommercialFields,
        AmminitiesSellLandFields,
        AmminitiesSellResidentialFields,
        DisplaySellCommercialFields,
        DisplaySellLandFields,
        DisplaySellResidentialFields,
        MiscellineousSellCommercialJson,
        MiscellineousSellLandJson,
        MiscellineousSellResidentialJson,
        DisplayRentCommercialFields,
        DisplayRentLandFields,
        DisplayRentPGFields,
        DisplayRentResidentialFields,
        AmminitiesRentCommercialFields, 
        AmminitiesRentLandFields, 
        AmminitiesRentResidentialFields, 
        AmminitiesRentPGFields,
        MiscellineousRentCommercialJson, 
        MiscellineousRentPGJson, 
        MiscellineousRentLandJson, 
        MiscellineousRentResidentialJson
    };      
    
const displayJson = `Display${offerType}${propertytype}Fields`;
    var displaJson = fields[displayJson];
    return (
            <FormRenderDynamic setStep={setStep} displayjson={displaJson} register={register} setValue={setValue} propertytype={propertytype} offerType={offerType} values={values} errors={errors} setErrors={setErrors}/>
    )
}

SecondForm.propTypes = {
    setStep: PropTypes.func.isRequired
}