/*
*   More user-friendly rewrite of CRX-R using the Fetch API
*   to download off of clients2.
*
*   I drank the Kool-Aid. Oh yeahhhhh!
*/

"use strict";

// Run the actual code when user clicks submit
const textarea = document.getElementById("box");
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", main);


// Used for invoking downloads
const a = document.createElement("a");


function main() {
	const ids = textarea.value.split("\n");

	ids.forEach(downloadOne);
}

async function downloadOne(id) {
	const url = formatDownloadUrl(id);

	const res		= await fetch(url);
	const content	= await res.text();
}

function downloadData(data, filename) {
	a.href = "data:application/octet-stream," + encodeURIComponent(data);
	a.download = filename;
	a.click();
}

function formatDownloadUrl(id) {
	return `https://clients2.google.com/service/update2/crx?response=redirect&os=linux&arch=x64&os_arch=x86_64&nacl_arch=x86-64&prod=chromium&prodchannel=unknown&prodversion=91.0.4442.4&lang=en-US&acceptformat=crx2,crx3&x=id%3D${id}%26installsource%3Dondemand%26uc`;
}
