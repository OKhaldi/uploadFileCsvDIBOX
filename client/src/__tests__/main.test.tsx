import App from "@/App"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

describe("App component", () => {
  test("Should render", async () => {
    render(<App />)

    const welcomeText = await screen.findByText("Bienvenue dans l'application Echo test user")
    expect(welcomeText).toBeInTheDocument()
  })
})
