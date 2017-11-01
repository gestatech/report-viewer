package org.prashantp.reportviewer.boundary;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("reports")
public class ReportsResource {
	
	@GET
	public String test() {
		return "It worked";
	}
}