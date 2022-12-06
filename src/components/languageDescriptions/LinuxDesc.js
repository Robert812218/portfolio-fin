import React from "react";


export default function LinuxDesc() {
	const str1 = `Linux (/ˈliːnʊks/ (listen) LEE-nuuks or /ˈlɪnʊks/ LIN-uuks)[11] is a family of open-source Unix-like operating systems based on the Linux kernel,[12] an operating system kernel first released on September 17, 1991, by Linus Torvalds.[13][14][15] Linux is typically packaged as a Linux distribution, which includes the kernel and supporting system software and libraries, many of which are provided by the GNU Project. Many Linux distributions use the word "Linux" in their name, but the Free Software Foundation uses the name "GNU/Linux" to emphasize the importance of GNU software, causing some controversy.[16][17]`;

	const str2 = `Popular Linux distributions[18][19][20] include Debian, Fedora Linux, and Ubuntu, the latter of which itself consists of many different distributions and modifications, including Lubuntu and Xubuntu. Commercial distributions include Red Hat Enterprise Linux and SUSE Linux Enterprise. Desktop Linux distributions include a windowing system such as X11 or Wayland, and a desktop environment such as GNOME or KDE Plasma. Distributions intended for servers may omit graphics altogether, or include a solution stack such as LAMP. Because Linux is freely redistributable, anyone may create a distribution for any purpose.[21]`;

	const str3 = `Pop!_OS is a free and open-source Linux distribution, based upon Ubuntu, and featuring a customized GNOME desktop environment known as COSMIC. The distribution is developed by American Linux computer manufacturer System76. Pop!_OS is primarily built to be bundled with the computers built by System76, but can also be downloaded and installed on most computers.[3]`;
	const str4 = `Pop!_OS provides full out-of-the-box support for both AMD and Nvidia GPUs. It is regarded as an easy distribution to set up for gaming, mainly due to its built-in GPU support. Pop!_OS provides default disk encryption, streamlined window and workspace management, keyboard shortcuts for navigation as well as built-in power management profiles. The latest releases also have packages that allow for easy setup for TensorFlow and CUDA.[4][5]`;

	const str5 = `Arch Linux (/ɑːrtʃ/)[8][9] is an independently developed, x86-64 general-purpose Linux distribution that strives to provide the latest stable versions of most software by following a rolling-release model. The default installation is a minimal base system, configured by the user to only add what is purposely required.[10]`;
	const str6 = `Pacman, a package manager written specifically for Arch Linux, is used to install, remove and update software packages.[11]`;

	return (
		<div>
			<h1>LINUX</h1>
				<h2>Overview</h2>
					<p>${str1}</p>
					<p>${str2}</p>
				<h2>Operating Systems</h2>
					<h3>Pop!_OS</h3>
						<p>${str3}</p>
						<p>${str4}</p>
					<h3>Arch Linux</h3>
						<p>${str5}</p>
						<p>${str6}</p>



		</div>
	);
}
