package com.fsoft.coffeesystem.utilites;

import java.util.ArrayList;
import java.util.List;

import org.apache.http.NameValuePair;
import org.apache.http.message.BasicNameValuePair;

import com.twilio.sdk.TwilioRestClient;
import com.twilio.sdk.TwilioRestException;
import com.twilio.sdk.resource.factory.MessageFactory;
import com.twilio.sdk.resource.instance.Account;

/*
 * Send password to phone
 * */
public class SendMessageToNumberPhone {
	private String twilioAccountSid;
	private String twilioAuthToken;
	private String twilioNumber;
	
	public SendMessageToNumberPhone() {
		super();
	}

	public SendMessageToNumberPhone(String twilioAccountSid,
			String twilioAuthToken, String twilioNumber) {
		super();
		this.twilioAccountSid = twilioAccountSid;
		this.twilioAuthToken = twilioAuthToken;
		this.twilioNumber = twilioNumber;
	}
	
	public String getTwilioAccountSid() {
		return twilioAccountSid;
	}

	public void setTwilioAccountSid(String twilioAccountSid) {
		this.twilioAccountSid = twilioAccountSid;
	}

	public String getTwilioAuthToken() {
		return twilioAuthToken;
	}

	public void setTwilioAuthToken(String twilioAuthToken) {
		this.twilioAuthToken = twilioAuthToken;
	}

	public String getTwilioNumber() {
		return twilioNumber;
	}

	public void setTwilioNumber(String twilioNumber) {
		this.twilioNumber = twilioNumber;
	}	
	/**
	 * Send password to phone.
	 *
	 * @param toNumber: Number phone Receiver
	 * @param message:   message info
	 * @return true if success else false
	 */
	public boolean sendMessageToPhone(String toNumber, String message) {
		TwilioRestClient client = new TwilioRestClient(twilioAccountSid,
				twilioAuthToken);
		Account account = client.getAccount();
		MessageFactory messageFactory = account.getMessageFactory();
		List<NameValuePair> params = new ArrayList<NameValuePair>();
		params.add(new BasicNameValuePair("To", toNumber));
		params.add(new BasicNameValuePair("From", twilioNumber));
		params.add(new BasicNameValuePair("Body",
				"Xin chào! Mã xác thực của bạn là " + message));
		try {
			 messageFactory.create(params);
			return true;
		} catch (TwilioRestException e) {
			return false;
		}
	}
}
