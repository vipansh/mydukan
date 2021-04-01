import React from 'react'
import { NavLink } from 'react-router-dom'
import { Cart } from '../navbar/Cart'
import './footer.css'
export const MobileFooter = () => {
    return (
        <div className="mobile-footer">
            <NavLink className="navbar-btn-link" exact={true} activeClassName='navbar-btn-link-active' to="/">
                <div className="navbar-cart-badge">
                    <img className="navbar-cart-img" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iI0IzQjNCMyIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNS42MzYgMjEuOTFDNC4xOCAyMS45MSAzIDIwLjcyOCAzIDE5LjI3MnYtMTBjMC0uMjUzLjExNy0uNDkxLjMxNi0uNjQ2bDguMTgyLTYuMzY0Yy4yOTUtLjIzLjcwOS0uMjMgMS4wMDQgMGw4LjE4MiA2LjM2NGMuMi4xNTUuMzE2LjM5My4zMTYuNjQ2djEwYzAgMS40NTYtMS4xOCAyLjYzNi0yLjYzNiAyLjYzNnpNMTIgMy45NDRMNC42MzYgOS42NzJ2OS42YzAgLjUxNi4zOS45NC44OTEuOTk1bC4xMS4wMDYgMi44MTctLjAwMXYtNi40NTRjMC0xLjQwNCAxLjA5OC0yLjU1MiAyLjQ4Mi0yLjYzMmwuMTU1LS4wMDRoMS44MThjMS40MDQgMCAyLjU1MiAxLjA5NyAyLjYzMiAyLjQ4MWwuMDA0LjE1NXY2LjQ1NGgyLjgxOWMuNTEyIDAgLjkzNS0uMzg1Ljk5My0uODgzbC4wMDctLjExNnYtOS42TDEyIDMuOTQ1em0uOTEgOC44NzNoLTEuODJjLS41MTUgMC0uOTM5LjM5LS45OTMuODkxbC0uMDA2LjExLS4wMDEgNi40NTNoMy44MTl2LTYuNDU0YzAtLjUxNS0uMzktLjk0LS44OS0uOTk0bC0uMTEtLjAwNnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMiAtNjg5KSB0cmFuc2xhdGUoMCA2NjkpIHRyYW5zbGF0ZSgzMiAyMCkiLz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="Home" className="active-icon" />

               Home
</div>
            </NavLink>

            <NavLink className="navbar-btn-link" activeClassName='navbar-btn-link-active' to="/bag">

                <Cart />

            </NavLink>
            <NavLink className="navbar-btn-link" to="/">
                <div className="navbar-cart-badge">
                    <img className="navbar-cart-img" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iI0IzQjNCMyIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE1LjgyNSAxMi42NmMyLjkzNCAwIDUuMjc2IDIuNTQ2IDUuMzgzIDUuNjhsLjAwNC4yMjZ2MS4yMjRjMCAuNTItLjM5Ni45NS0uOTA0IDEuMDA0bC0uMTEuMDA2SDMuODAyYy0uNTIzIDAtLjk1NC0uMzk0LTEuMDA5LS45bC0uMDA2LS4xMXYtMS4yMjRjMC0zLjE2MiAyLjI3NC01Ljc4MiA1LjE3OC01LjkwMmwuMjA5LS4wMDVoNy42NXptMCAxLjc1aC03LjY1Yy0xLjkxOCAwLTMuNTM1IDEuNzItMy42MyAzLjk0NmwtLjAwNS4yMS0uMDAxLjQ4MkgxOS40NnYtLjQ4MmMwLTIuMjU2LTEuNTU4LTQuMDQ0LTMuNDU2LTQuMTVsLS4xNzktLjAwNXpNMTIgMS44YzIuNjI0IDAgNC43NDggMi4xMzYgNC43NDggNC43NjUgMCAyLjYzLTIuMTI0IDQuNzY1LTQuNzQ4IDQuNzY1UzcuMjUyIDkuMTk1IDcuMjUyIDYuNTY1IDkuMzc2IDEuOCAxMiAxLjh6bTAgMS43NTFjLTEuNjU0IDAtMi45OTYgMS4zNDktMi45OTYgMy4wMTQgMCAxLjY2NiAxLjM0MiAzLjAxNCAyLjk5NiAzLjAxNHMyLjk5Ni0xLjM0OCAyLjk5Ni0zLjAxNGMwLTEuNjY1LTEuMzQyLTMuMDE0LTIuOTk2LTMuMDE0eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI0NiAtNjg5KSB0cmFuc2xhdGUoMCA2NjkpIHRyYW5zbGF0ZSgyNDAgMTIpIHRyYW5zbGF0ZSg2IDgpIi8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K" alt="Account" className="active-icon" />
                Account
</div>
            </NavLink>

        </div >
    )
}
