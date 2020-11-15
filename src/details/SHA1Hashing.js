import React, { Component } from 'react'

export default class SHA1Hashing extends Component {
	render() {
		return (
			<div>
				<p>SHA1 is one of many hashing algorithms in use today.  A hashing algorithm converts some arbitrary input to a deterministic (always the same result for a given input) bit array of a fixed size.  Hashing functions are one-way only; hashing an input is extremely easy, but de-hashing a hash is practically impossible (only achievable through brute force).</p>
				<p>Hashing algorithms like SHA1 are a cornerstone of security in computing.  A common use case is anywhere you are prompted for a password.  Websites that ask for a password always hash them before storing them in their database.  Then, when the user tries to login again, the entered password is hashed and compared to the hash stored in the database.  This is a necessary process, because in the case of a database breach, hashed passwords are not compromised since hashing is a one-way process.</p>
			</div>
		)
	}
}