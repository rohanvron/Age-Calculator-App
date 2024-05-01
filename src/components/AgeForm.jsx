import AgeInput from "./AgeInput";
import IconArrow from "../assets/images/icon-arrow.svg";
import { useState } from "react";

const AgeForm = ({ setAgeResult }) => {
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [errors, setErrors] = useState({ day: "", month: "", year: "" });

    // handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (validate()) {
            const result = calculateAge(day, month, year);
            setAgeResult(result);
        }
    };

    // function to validate date
    const validateDate = (day, month, year) => {
        const inputDate = new Date(year, month -1, day);

        // to check input matches with parsed date
        if (
            inputDate.getDate() !== parseInt(day) ||
            inputDate.getMonth() + 1 !== parseInt(month) ||
            inputDate.getFullYear() !== parseInt(year)
        ) {
            return false;
        }
        return true;
    };

    // function to validate day, month, and year fields
    const validate = () => {
        let tempErrors = {day: "", month: "", year: "" };
        const currentYear = new Date().getFullYear();

        // day validation
        if (!day) tempErrors.day = "This field is required";
        else if (!/^(0?[1-9]|[12][0-9]|3[01])$/.test(day))
            tempErrors.day = "Must be a valid day";

        // month validation
        if (!month) tempErrors.month = "This field is required";
        else if (!/^(0?[1-9]|1[0-2])$/.test(month))
            tempErrors.month = "Must be a valid month";

        // year validation
        if (!year) tempErrors.year = "This field is required";
        else if (!/^[0-9]+$/.test(year))
            tempErrors.year = "Invalid year format";
        else if (parseInt(year) > currentYear )
            tempErrors.year = "Must be in the past";
            else if (!validateDate(day, month, year))
            tempErrors.day = "The date in invalid";

        // error message to state
        setErrors(tempErrors);
        return Object.values(tempErrors).every((x) => x === "");
    };

    // to calculate age based on inputs
    const calculateAge = (day, month, year) => {
        if (day.toString().length === 1) {
            day = '0' + day;
        }
    
        if (month.toString().lenghth === 1) {
            month = '0' + month;
        }
        // let dateOfBith = 'YYYY-MM-DD';
    
        let dateOfBirth = `${year}-${month}-${day}`;
    
        var today = new Date();
        var birthDate = new Date(dateOfBirth);
    
        var years = today.getFullYear() - birthDate.getFullYear();
        var months = today.getMonth() - birthDate.getMonth();
        var days = today.getDate() - birthDate.getDate();
    
        if (months < 0 || (months === 0 && days < 0)) {
            years--;
            months += 12;
        }
    
        if (days < 0) {
            var prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
            days += prevMonth.getDate();
            months--;
        }
    
        return {
            years: years,
            months: months,
            days: days,
        };
    };

    return (
        <form method="post" onSubmit={handleSubmit}>
            <div className="flex gap-4 text-smokey-grey font-bold sm:gap-8">
                <AgeInput 
                name="day"  
                placeholder="DD" 
                value={day} 
                onChange={(e) => setDay(e.target.value)}
                error={errors.day}   
                />
                <AgeInput 
                name="month"  
                placeholder="MM" 
                value={month} 
                onChange={(e) => setMonth(e.target.value)}
                error={errors.month}   
                />
                <AgeInput 
                name="year"  
                placeholder="YYYY" 
                value={year} 
                onChange={(e) => setYear(e.target.value)}
                error={errors.year}   
                />
            </div>
            <button type="submit" className="btn" aria-label="Calculate your age">
                <img src={IconArrow} alt="" className="h-6 lg:h-11"></img>
            </button>
        </form>
    );
};

export default AgeForm;