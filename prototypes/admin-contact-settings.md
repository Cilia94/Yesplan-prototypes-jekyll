---
layout: default
title: "Global Settings: Permission Presets"
currentMainItem: contacts
permalink: /admin-contact-settings
currentSubItem: contact-settings
---

<div id="admin" class="panel panel--fullscreen">
{% include admin-nav.html %}

    <a onclick="$(this).toggleClass('unlocked');" class="lock unlocked" href="#">(Un)lock</a>
    <div class="panel-main grid grid--lined-gutters">
    	<div class="grid-cell scroll-vh">
    		<form>
    			<table class="user-preferences">
    			<tbody>
    				<tr>
    					<td>Contacts default contact type</td>
    					<td><div id="property-contactDefaultContactType"><select name="13091"><option value="1">Other</option><option value="2" selected="selected">E-mail</option><option value="3">Telephone</option><option value="4">Mobile</option><option value="5">Fax</option><option value="6">Website</option><option value="7">IM</option></select></div></td>
    					<td><span class="action-list"><a href="#" class="action shy">default</a></span></td>
    				</tr>
    				<tr>
    					<td>Contacts default country</td>
    					<td><div id="property-contactDefaultCountry"><select name="13093"><option value="1">Afghanistan</option><option value="2">Albania</option><option>&hellip;</option><option selected>Belgium</option><option>&hellip;</option><option value="235">Western Sahara</option><option value="236">Yemen</option><option value="237">Yugoslavia</option><option value="238">Zambia</option><option value="239">Zimbabwe</option></select></div></td>
    					<td><span class="action-list"><a href="#" class="action shy">default</a></span></td>
    				</tr>
    				<tr>
    					<td>Contacts default language</td>
    					<td><div id="property-contactDefaultLanguage"><select name="13095"><option value="1" selected="selected">NL</option><option value="2">FR</option><option value="3">EN</option><option value="4">ES</option><option value="5">ISL</option><option value="6">IT</option><option value="7">JAP</option><option value="8">PT</option></select></div></td>
    					<td><span class="action-list"><a href="#" class="action shy">default</a></span></td>
    				</tr>
    				<tr>
    					<td>Format for parsing contacts</td>
    					<td><div id="property-contactFormat"><select name="13097"><option value="1" selected="selected">Firstname Name</option><option value="2">Name Firstname</option></select></div></td>
    					<td><span class="action-list"><a href="#" class="action shy">default</a></span></td>
    				</tr>
    				<tr>
    					<td>Use last name preposition</td>
    					<td><div id="property-useLastNamePreposition"><select name="13099"><option value="1" selected="selected">true</option><option value="2">false</option></select></div></td>
    					<td><span class="action-list"><a href="#" class="action shy">default</a></span></td>
    				</tr>
    				<tr>
    					<td>Use contact initial</td>
    					<td><div id="property-contactUseInitial"><select name="13101"><option value="1" selected="selected">true</option><option value="2">false</option></select></div></td>
    					<td><span class="action-list"><a href="#" class="action shy">default</a></span></td>
    				</tr>
    			</tbody>
    			</table>
    			<input name="13103" value="Save" type="submit" class="btn">
    		</form>
    	</div>
    </div>
    <a href="/calendar/" class="close" title="Click to close this window">Close this window</a>

</div>
<nav class="panel-nav">
	<ul>
		<li class="active-tab"><a href="/admin-users/">Users</a></li>
		<li><a href="/admin-event-custom-data/">Events</a></li>
		<li><a href="/admin-resources-groups-roles/">Resources</a></li>
		<li><a href="/admin-contact-settings/">Contacts</a></li>
		<li><a href="/admin-search-global-search-presets/">Search</a></li>
		<li><a href="/admin-imports-contacts/">Imports</a></li>
		<li><a href="/admin-integrations-ticketing/">Integrations</a></li>
		<li><a href="/admin-system-settings/">System Settings</a></li>
	</ul>
</nav>
<nav class="panel-subnav">
	<ul>
		<li><a href="#">Custom Data</a></li>
		<li><a href="#">Custom Data for Bookings</a></li>
		<li><a href="#">Inspector Tabs</a></li>
		<li><a href="#">Titles</a></li>
		<li><a href="#">Organization Types</a></li>
		<li><a href="#">Labels</a></li>
		<li><a href="/admin-contact-settings/">Preferences</a></li>
	</ul>
</nav>
</div>
