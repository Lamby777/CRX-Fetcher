/*
*   More user-friendly rewrite of CRX-R using the Fetch API
*   to download off of clients2.
*
*   I drank the Kool-Aid. Oh yeahhhhh!
*/

"use strict";

// Run the actual code when user clicks submit
const textarea = document.getElementById("box");
const linksDiv = document.getElementById("links");
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", main);


function main() {
	const ids = textarea.value.split("\n");

	ids.forEach((id) => {
		const a		= document.createElement("a");
		a.href		= formatDownloadUrl(id);
		a.download	= id+".zip";

		a.classList.add("downloadLink");
		a.innerText	= id;

		a.onclick	= (() => a.remove());

		linksDiv.appendChild(a);
	});

	ids.value = "";

	linksDiv.scrollIntoView();
}

function formatDownloadUrl(id) {
	return `https://clients2.google.com/service/update2/crx?response=redirect&os=linux&arch=x64&os_arch=x86_64&nacl_arch=x86-64&prod=chromium&prodchannel=unknown&prodversion=91.0.4442.4&lang=en-US&acceptformat=crx2,crx3&x=id%3D${id}%26installsource%3Dondemand%26uc`;
}
