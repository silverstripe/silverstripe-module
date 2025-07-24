/* global jest, test, expect */

import React from 'react';
import { render } from '@testing-library/react';
import ExampleComponent from '../ExampleComponent';

test('ExampleComponent renders', async () => {
  const { container } = render(<ExampleComponent/>);
  const options = container.querySelectorAll('.example-component');
  expect(options).toHaveLength(1);
});
