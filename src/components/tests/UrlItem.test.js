import UrlContainer from '../UrlContainer';
import React from 'react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

const server = setupServer(
  rest.get('/https://api.bely.me/links', (req, res, ctx) => {
    return res(ctx.json([
      {url: 'url1'}, {url: 'url2'}, {url: 'url3'}, {url: 'url4'}
  ]))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('returns lists of urls from get api call', async () => {
  render(<UrlContainer />)

  const items = await screen.findAllByText(/Item #[0-9]: /)
  expect(items).toHaveLength(10)

  // fireEvent.click(screen.getByText('Load Greeting'))
  //
  // await waitFor(() => screen.getByRole('heading'))

  // expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  // expect(screen.getByRole('button')).toBeDisabled()
})
