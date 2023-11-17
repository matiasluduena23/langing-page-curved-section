const form = document.querySelector('#form-subscribe');

form?.addEventListener('submit' ,(e) => {
    e.preventDefault()
    const input = form.querySelector('input')?.value.trim();

    if(input === ''){
        showError(`Can't be blank`, e.currentTarget as HTMLFormElement)
    }else if(!validateEmail(input!)) {
        showError(`Check you email please`, e.currentTarget as HTMLFormElement)
    }else {
        showSuccess('Thanks for surscribe!!!', e.currentTarget as HTMLFormElement)
    }

})


function showError(message:string, formTarget: HTMLFormElement | null) {
    const spanErrorElement = formTarget?.querySelector('span');
    (spanErrorElement as HTMLSpanElement).innerText = message;
    formTarget?.classList.remove('show-success');
    formTarget?.classList.add('show-error');

}

function showSuccess(message:string, formTarget: HTMLFormElement | null) {
    const span = formTarget?.querySelector('span');
    (span as HTMLSpanElement).innerText = message;
    formTarget?.classList.remove('show-error');
    formTarget?.classList.add('show-success');
    
    clearSuccess((span as HTMLSpanElement), formTarget!)
}


function clearSuccess(span: HTMLSpanElement, form: HTMLFormElement  ) {
    const formElement = form?.querySelector('input');
    setTimeout(() => {
         formElement!.value = "";
        span.innerText = "";
    }, 3000);
    
  }


const validateEmail = (email: string) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };