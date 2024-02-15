import { render, screen } from "@testing-library/react";
import FollowersList from "../FollowersList"
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const MockFollowersList = () => {
    return(
        <BrowserRouter>
            <FollowersList></FollowersList>
        </BrowserRouter>
    )
}

describe("FollowersList", () => {
    test("should render a follower item", async () => {
        render(<MockFollowersList></MockFollowersList>);
        const followerDivElement = await screen.findByTestId(/follower-item-0/i);
        expect(followerDivElement).toBeInTheDocument();
    })

    // test("should render multiple follower items", async () => {
    //     render(<MockFollowersList></MockFollowersList>);
    //     const followerDivElements = await screen.findAllByTestId(/follower-item/i);
    //     expect(followerDivElements.length).toBe(5);
    // })
})