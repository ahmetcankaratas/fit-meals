import classes from './Checkout.module.css';
import useInput from '../../hooks/use-input';

const isNotEmpty = value => value.trim().length > 2;
const isFiveChars = value => value.trim().length === 5;

const Checkout = (props) => {
    const {
        value: enteredName,
        isValid: nameIsValid,
        hasError: nameHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler
      } = useInput(isNotEmpty);

      const {
        value: enteredStreet,
        isValid: streetIsValid,
        hasError: streetHasError,
        valueChangeHandler: streetChangeHandler,
        inputBlurHandler: streetBlurHandler
      } = useInput(isNotEmpty);

      const {
        value: enteredPostalCode,
        isValid: postalIsValid,
        hasError: postalHasError,
        valueChangeHandler: postalChangeHandler,
        inputBlurHandler: postalBlurHandler
      } = useInput(isFiveChars);

      const {
        value: enteredCity,
        isValid: cityIsValid,
        hasError: cityHasError,
        valueChangeHandler: cityChangeHandler,
        inputBlurHandler: cityBlurHandler
      } = useInput(isNotEmpty);

      let formIsValid = false;

      if (nameIsValid && streetIsValid && postalIsValid && cityIsValid) {
        formIsValid = true;
      }

    const confirmHandler = (event) => {
        event.preventDefault();

        if (!formIsValid) {
            return;
        }

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postalCode: enteredPostalCode
        })
    }

    const nameControlClasses = `${classes.control} ${nameHasError ? classes.invalid : ''}`
    const streetControlClasses = `${classes.control} ${streetHasError ? classes.invalid : ''}`
    const postalCodeControlClasses = `${classes.control} ${postalHasError ? classes.invalid : ''}`
    const cityControlClasses = `${classes.control} ${cityHasError ? classes.invalid : ''}`

    return <form className={classes.form} onSubmit={confirmHandler}>
        <div className={nameControlClasses}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" onChange={nameChangeHandler} onBlur={nameBlurHandler} value={enteredName}/>
            {nameHasError&& <p>Please enter a valid name!</p>}
        </div>
        <div className={streetControlClasses}>
            <label htmlFor="street">Street</label>
            <input type="text" id="name" onChange={streetChangeHandler} onBlur={streetBlurHandler} value={enteredStreet}/>
            {streetHasError&& <p>Please enter a valid street name!</p>}
        </div>
        <div className={postalCodeControlClasses}>
            <label htmlFor="postal">Postal Code</label>
            <input type="text" id="name" onChange={postalChangeHandler} onBlur={postalBlurHandler} value={enteredPostalCode}/>
            {postalHasError&& <p>Please enter a valid 5 digits postal code!</p>}
        </div>
        <div className={cityControlClasses}>
            <label htmlFor="city">City</label>
            <input type="text" id="name" onChange={cityChangeHandler} onBlur={cityBlurHandler} value={enteredCity}/>
            {cityHasError&& <p>Please enter a valid city name!</p>}
        </div>
        <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button className={classes.submit} disabled={!formIsValid}>Confirm</button>
        </div>
    </form>
};

export default Checkout