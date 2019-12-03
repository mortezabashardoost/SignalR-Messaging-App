using Microsoft.AspNetCore.SignalR;

namespace MessageBoardBackend.Hub
{
    public class EchoHub:Microsoft.AspNetCore.SignalR.Hub
    {
        public void Echo(string message)
        {
            Clients.All.SendAsync("Send",message);
        }
    }
}
