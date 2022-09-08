import { GoAInput, GoAInputDate, GoAInputDateTime, GoAInputNumber, GoAInputTime } from '@abgov/react-components';
import { format } from 'date-fns';
import * as React from 'react';

export default function Input() {

  function noop(...args: unknown[]) {
    console.log(args)
  }

  const date = new Date();
  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  return (
    <>
      <h3>Basic</h3>
      <GoAInput
        name=""
        value=""
        type="text"
        onChange={noop}
      />
      <GoAInputNumber
        name=""
        placeholder="Number"
        value={0}
        min={0}
        max={10}
        step={2}
        onChange={noop}
      />
      <GoAInputDate
        name="Date from string value"
        value={date.toISOString()}
        onChange={noop}
      />
      <GoAInputDate
        name="Date"
        value={date}
        onChange={noop}
      />
      <GoAInputDateTime
        name="Date Time"
        value={date}
        onChange={noop}
      />

      Time from Date value
      <GoAInputTime
        name="Time from date value"
        value={date}
        onChange={noop}
      />

      Time from string datetime ISO 8601 value
      <GoAInputTime
        name="Time w/ string datetime ISO 8601 value"
        value={date.toISOString()}
        onChange={noop}
      />

      Time from string mm:ss value
      <GoAInputTime
        name="Time from string mm:ss value"
        value={format(date, "hh:mm")}
        onChange={noop}
        step={1}
      />

      Time with a min and max 
      <GoAInputDate
        name="Date with min max"
        value={date.toISOString()}
        min={minDate.toISOString()}
        max={maxDate.toISOString()}
        onChange={noop}
      />

      <h3>Icons</h3>
      <GoAInput
        name=""
        value=""
        onChange={noop}
        type="text"
        leadingIcon="finger-print"
      />

      <GoAInput
        name=""
        value=""
        onChange={noop}
        type="text"
        trailingIcon="finger-print"
      />

      <h3>Icon Buttons</h3>
      <GoAInput
        trailingIcon="finger-print"
        name=""
        value=""
        onChange={noop}
        type="text"
        onTrailingIconClick={noop}
      />

      <h3>Disabled</h3>
      <GoAInput
        name=""
        value=""
        onChange={noop}
        type="text"
        disabled={true} 
        placeholder="Find by name"
      />

      <h3>Error state</h3>
      <GoAInput
        name=""
        value=""
        onChange={noop}
        type="text"
        error={true}
      />

      <h3>Focus</h3>
      <GoAInput
        name=""
        value=""
        onChange={noop}
        type="text"
      />

      <h3>Character count</h3>
      <GoAInput
        name="firstname"
        value=""
        onChange={noop}
        type="text"
        maxCharCount={20}
      />

      <h3>Character count with limit</h3>
      <GoAInput
        name="firstname"
        value=""
        onChange={noop}
        type="text"
        showCounter={true}
        maxCharCount={20}
      />

      <h3>Prefix and Suffix</h3>
      <GoAInput name="input" value="" prefix="$" onChange={noop} />
      <GoAInput name="input" value="" suffix="items" onChange={noop} />
      <GoAInput name="input" value="" prefix="$" suffix="per item" onChange={noop} />
    </>
  );
}

