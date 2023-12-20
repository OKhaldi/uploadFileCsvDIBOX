import { server } from "@/mocks/server"
import { getAllRequestPaginateKoMock } from "@/mocks/services/requestService/getAllRequest"
import { host } from "@/mocks/services/requestService/requestUtils"
import { renderWrapperContext } from "@/utils/testutils"
import { screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { describe, expect, test } from "vitest"
import RequestListActivity from "../RequestListActivity"
import { columns } from "../const"

describe("RequestListActivity component", () => {
  test("Should render", async () => {
    renderWrapperContext(<RequestListActivity />)

    columns.forEach(({ title }) => {
      if (title !== undefined) {
        expect(screen.getByText(title as string)).toBeInTheDocument()
      }
    })

    await waitForElementToBeRemoved(() => screen.getByText("No data"))

    const localhost = await screen.findAllByText(host[0])
    expect(localhost).toHaveLength(Math.ceil(20 / host.length))

    const row = screen.getByRole("row", {
      name: /path1 get localhost app 1 200/i
    })

    expect(row).toBeInTheDocument()
  })

  test("Should Pagination Work", async () => {
    renderWrapperContext(<RequestListActivity />)
    await waitForElementToBeRemoved(() => screen.getByText("No data"))

    const total = screen.getByText(/total 70 items/i)

    expect(total).toBeInTheDocument()

    const page4 = screen.getByRole("listitem", {
      name: /4/i
    })
    expect(page4).toBeInTheDocument()

    await userEvent.click(page4)

    const row = await screen.findByRole("row", {
      name: /path1 get localhost app 1 200/i
    })

    expect(row).toBeInTheDocument()
    const rows = await screen.findAllByRole("row")
    expect(rows).toHaveLength(11)
  })

  test("Should show notification when get request is in error", async () => {
    server.use(getAllRequestPaginateKoMock)
    renderWrapperContext(<RequestListActivity />)

    await waitFor(() => {
      expect(screen.getByText("Une erreur est survenue lors de la récupération des requests"))
    })
  })
})
